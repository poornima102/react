import React, { useState } from "react";
import TaskList from "./TaskList";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("Add a task to get started!");
  const [bg, setBg] = useState("");

  const addTask = () => {
    if (task === "") return;
    setTasks([...tasks, task]);
    setMessage(`Task added: ${task}!`);
    setTask("");
    setBg("lightblue");
  };

  return (
    <div style={{ background: bg, minHeight: "100vh" }} className="p-4">
      <div className="card p-4 mb-4">
        <h3>Task Planner</h3>
        <input
          className="form-control mb-3"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>
      <TaskList tasks={tasks} message={message} />
    </div>
  );
}
 
export default App;