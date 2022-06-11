//JSX allows html inside JS and an extended functionality of the same is:
//using JS expressions in HTML inside JS
//wrap JS expressions inside curly braces

import React from "react";
import ReactDOM from "react-dom";

const fname = "Kruthi";
const lname = "Siddaraju";
const no = 7;

/*using ES6 template literals:  
<h1>Hello {`${fname} ${lname}`}!</h1>
*/

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>
      {no} is my lucky number
      <br />
      Here's a random number: {Math.floor(Math.random() * 10)}
    </p>
  </div>,
  document.getElementById("root")
);
