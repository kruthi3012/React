import React from "react";
import ReactDOM from "react-dom";

//inline styling can be assigned to style as JSX objects
//eg: {color:"red",background-color:"white"}
//replace semicolon with comma and use camelcase and values as strings

const customStyle = {
  color: "Red",
  fontSize: "20px",
  border: "10px solid black"
};

//inline styling is useful to change properties on the go
customStyle.color = "blue";
customStyle.border = "20px dotted purple";

ReactDOM.render(
  <div>
    <h1 style={{ color: "prussian blue" }}>Hello World!</h1>
    <p style={customStyle}>OKAY GOOGLE</p>
  </div>,
  document.getElementById("root")
);
