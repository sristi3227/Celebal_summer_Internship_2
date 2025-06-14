import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import { loadTasks, saveTasks } from "../util/localstorage";
import styles from './TodoList.module.css';



const TodoList = () => {
const [tasks, setTasks] = useState(() => loadTasks());

  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));

  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  const filtered = tasks.filter(t =>
    filter === "all" ? true :
    filter === "completed" ? t.completed :
    !t.completed
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "newest") return b.id - a.id;

    if (sortBy === "oldest") return a.id - b.id;
    if (sortBy === "completed") return b.completed - a.completed;
    return 0;
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>✨ To-Do-List ✨</h2>

      <TaskForm onAdd={addTask} />

      <div className={styles.controls}>
        <label className={styles.label}>
          📋 Filter:
          <select className={styles.select} value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </label>


        <label className={styles.label}>
          🔄 Sort:
          <select className={styles.select} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="completed">Completed First</option>
          </select>
        </label>



        {tasks.length > 0 && (
          <button className={styles.clearAllBtn} onClick={clearAllTasks}>
            <i className="fas fa-trash-alt"></i> Clear All
          </button>
        )}
      </div>


      <TaskList tasks={sorted} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export default TodoList;
