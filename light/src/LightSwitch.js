import React from "react";

function LightSwitch(props) {
  return (
    <button onClick={() => props.setIsOn(!props.isOn)}>
      {props.isOn ? "Turn OFF" : "Turn ON"}
    </button>
  );
}

export default LightSwitch;