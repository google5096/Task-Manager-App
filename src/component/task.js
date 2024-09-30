// src/components/Task.js
import React from 'react';
import './task.css'; // Import the CSS file


const Task = ({ task, onDelete, onComplete }) => {
  return (
    <div className="task">
      <span style={{ textDecoration: task.completed ? 'line-through' : '' }}>
        {task.name}  
      </span>
      <div>
        {/* onComplete */}
        <button onClick={() => onComplete(task.id)} className="btn btn-success" 
         style={{ marginRight: '10px' }}   >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        {/* onDelete */}
        <button onClick={() => onDelete(task.id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
