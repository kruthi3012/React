import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list_item, setlist_item] = useState([]);

  function handleChange(event) {
    var temp = event.target.value;
    setItem(temp);
  }

  function handleClick() {
    setlist_item((prev) => {
      return [...prev, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={item} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list_item.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
