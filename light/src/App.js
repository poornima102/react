import React, { useState } from "react";
import LightSwitch from "./LightSwitch";

function Room() {

  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{isOn ? "The room is bright" : "The room is dark"}</h2>

      <LightSwitch isOn={isOn} setIsOn={setIsOn} />
    </div>
  );
}

export default Room;