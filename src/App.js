// src/App.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';   // uuid: For generating unique IDs for each task.
import Task from './component/task';
import './App.css';  // Import your CSS


const App = () => {
  // state
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState([]);

  // handleAddTask function  = to add task 
  const handleAddTask = () => {
    if (taskName.trim() === '') return;  // to check empty task 
    setTasks([...tasks, { id: uuidv4(), name: taskName, completed: false }]);
    setTaskName('');
  };

  // handleDeleteTask function  = to delete task 
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // handleCompleteTask function  = to complete task 
  const handleCompleteTask = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed : !task.completed } : task
      )
    );
  };

  return (
    <div className="container task-manager mt-4">
      <h1>Task Manager</h1>
      
      <div className="mb-3">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="form-control"
          placeholder="Add new task"
        />
        <button onClick={handleAddTask} className="btn btn-primary mt-2">
          Add Task
        </button>
      </div>

      {/* task component */}
      <div>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={handleDeleteTask}
              onComplete={handleCompleteTask}
            />
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </div>

    </div>
  );
};

export default App;
