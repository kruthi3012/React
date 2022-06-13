import React, { useState } from "react";

//HOOKS must always be used inside a function
//useState syntax: const[default value,function]=useState(default value)
//useState is an array with 2 elements, hence it is first destructured

function App() {
  const [count, setCount] = useState(0);

  function incCount() {
    setCount(count + 1);
  }

  function decCount() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decCount}>-</button>
      <button onClick={incCount}>+</button>
    </div>
  );
}

export default App;
