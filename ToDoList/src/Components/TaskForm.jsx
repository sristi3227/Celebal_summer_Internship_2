import React, { useState } from "react";
import styles from './TaskForm.module.css';

const TaskForm = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return alert("Task cannot be empty!");
    onAdd(trimmed);
    setInput("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}

        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
        
      />
      <button className={styles.button} type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
