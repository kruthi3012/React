import React from "react";
import Login from "./Login";

var isLogged = false;

const curr = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isLogged ? <h1>Hello</h1> : <Login />}
      {/* {curr > 12 ? <h1>why you still working?</h1> : null} */}
      {/* the below statement works the same as above incase we have only 
      one action to perform if true or else false */}
      {curr > 12 && <h1>why you still working?</h1>}
    </div>
  );
}

export default App;
