import React, { useState } from "react";
import "./todoapp.css";

function TodoApp() {
  const [task, setTask] = useState(" ");
  const [taskList, settaskList] = useState([]);
  const handleChange = (e) => {
    setTask(e.target.value);
    console.log(e);
  };

  console.log("task:", task);
  const addTask = () => {
    // console.log(task);
    if (task !== "") {
      const taskobj = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      }; 
      settaskList([...taskList, taskobj]);
    }
  };
  // console.log("tasklist", taskList);

  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
        placeholder="Add task"
      />
      <button className="add-btn" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default TodoApp;
