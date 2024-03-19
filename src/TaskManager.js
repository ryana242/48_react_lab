import React, { useState } from 'react';
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      name: 'New Task',
      description: 'Description of the task',
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-primary float-end" onClick={addTask}>
        Add New Task
      </button>
      <h2>Task Manager</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={() => deleteTask(task.id)} />
      ))}
    </div>
  );
}

export default TaskManager;
