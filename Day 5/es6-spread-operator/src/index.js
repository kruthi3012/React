import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//spread operator "..."

const peeps = ["Ricciardo", "Leclarc", "Vettel"];
const f1 = ["Daniel", ...peeps, "Charles", "Sebastian"];

console.log(f1);

const fullName = {
  fname: "JAMES",
  lname: "BOND"
};

const info = {
  ...fullName,
  id: "007",
  dets: "bond, james bond"
};

console.log(info);
