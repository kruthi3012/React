import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    const curr = new Date().toLocaleTimeString();
    setTime(curr);
  }
  return (
    <div>
      <h2>{time}</h2>
      <button onClick={updateTime}>get time</button>
    </div>
  );
}

export default App;
//
// console.log(time);
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
