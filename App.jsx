import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { text: "Task 1", completed: true },
    { text: "Task 2", completed: true },
    { text: "Task 3", completed: false },
    { text: "Task 4", completed: false },
    { text: "Task 5", completed: false }
  ]);

  const addTask = () => {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;
    setTasks([...tasks, { text: taskText, completed: false }]);
    input.value = "";
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>
      <div className="input-row">
        <input id="taskInput" placeholder="Add Task" />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <span>{task.text}</span>
            <div className="actions">
              <button onClick={() => toggleComplete(index)}>✓</button>
              <button onClick={() => deleteTask(index)}>x</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;