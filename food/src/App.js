import React, { useState } from "react";

function App() {
 let foods=["Pizza", "Burger", "Ice Cream"];
 let [message,setMessage]=useState("Select a food that you love!");
 return(
  <div>
    <h2>MY Favorite foods</h2>
    {foods.map((items,index)=>(
      <p key={index}>
      {items}
      <button  style={{ marginLeft: "10px" }} onClick={()=> setMessage("I Love" + items +"!")}>clickme</button>
    </p>
  ))}
    <h3 style={{ marginTop: "20px" }}>{message}</h3>
  </div>
 )
}
export default App;
