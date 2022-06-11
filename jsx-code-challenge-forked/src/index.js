//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>list of my favourite colors</h1>
    <ul>
      <li>black</li>
      <li>blue</li>
      <li>red</li>
    </ul>
  </div>,
  document.getElementById("root")
);
