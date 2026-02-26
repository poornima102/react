import React from "react";

function TaskList(props) {
  return (
    <div className="card p-4">
      <h4>Tasks</h4>
      <ul>
        {props.tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
      <p>{props.message}</p>
    </div>
  );
}

export default TaskList;    