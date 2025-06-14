import React from "react";

import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) return <p>No tasks found.</p>;
  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
