import React, { useState } from 'react';
import './App.css';
// hello from Hamza

const ToDoList = () => {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState(''); 
  
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]); 
      setNewTask(''); 
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); 
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

 
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <>
    <div className='container'>
      <div className="app-container">
        <div className="header">
          <h1>To-Do List</h1>
          <input
            type="text"
            id="new-task"
            placeholder="Add a new task..."
            autoFocus
            value={newTask}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button id="add-task-btn" onClick={addTask}>
            Add
          </button>
        </div>
        <ul className="task-list" id="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span>{task}</span>
              <button
                className="delete-btn"
                onClick={() => removeTask(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default ToDoList;
