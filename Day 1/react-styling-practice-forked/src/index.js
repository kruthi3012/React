//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const mystyle = {
  fontSize: "50px",
  fontWeight: "bold",
  borderBottom: "5px solid black"
};

//var text = " ";
let text;

var today = new Date();
const cur_hr = today.getHours();

if (cur_hr >= 0 && cur_hr < 12) {
  mystyle.color = "red";
  text = "Good Morning!";
} else if (cur_hr >= 12 && cur_hr < 18) {
  text = "Good Afternoon!";
  mystyle.color = "green";
} else {
  text = "Good Evening!";
  mystyle.color = "blue";
}
ReactDOM.render(
  <h1 style={mystyle}>{text}</h1>,
  document.getElementById("root")
);
