//import React from "react";
//import ReactDOM from "react-dom";
import emojipedia from "./emojipedia";

function conTrunc(data) {
  var text = data.meaning;
  return text.substring(0, 100);
}

var contOnly = emojipedia.map(conTrunc);

console.log(contOnly);

//ReactDOM.render(<div>{contOnly}</div>, document.getElementById("root"));

//challenge :
//to have a separate array consisting of the meanings of emojis and
//truncate the meaning to 100 characters only

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
