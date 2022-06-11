//importing libraries and binding it to keywords
/*var React = require("react");
var ReactDOM = require("react-dom");*/
//other way to import libraries is by using keyword "import"
import React from "react";
import ReactDOM from "react-dom";

//render syntax: ReactDOM.render(what to show,where to show);

ReactDOM.render(<h1>Hello world</h1>, document.getElementById("root"));

//babel is a JS compiler that converts next generation code JS code like JSX, and other versions to versions of
//JS that the browser understands (pure JS)
