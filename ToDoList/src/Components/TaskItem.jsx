import React from "react";
import styles from './TaskItem.module.css';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span className={`${styles.text} ${task.completed ? styles.completed : ''}`}>
        {task.text}

      </span>
      <button className={styles.deleteBtn} onClick={() => onDelete(task.id)}>
        <i className="fas fa-trash-alt"></i>

      </button>
    </li>
  );
};

export default TaskItem;
