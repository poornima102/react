import React from "react";
import profile from "./images/profile.jpg"; // Internal image

function App() {
  const userName = "Poornima";

  console.log("React app started");

  return (
    <div className="container text-center mt-5">
      <div className="card mx-auto p-3" style={{ width: "300px" }}>
        
       
        <h3 style={{ color: "blue" }}>Welcome to React Learning, {userName}</h3>

        <div className="d-flex flex-column align-items-center mt-3">
         
          <img
            src={profile}
            alt="Profile"
            className="img-fluid"
            style={{ width: "200px" }}
          />

          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjB0cmFpbmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&q=80&w=200"
            alt="External"
            className="img-fluid mt-3"
            style={{ width: "200px" }}
          />
        </div>

        <p className="text-muted mt-2">This is your first card!</p>
      </div>
    </div>
  );
}

export default App;