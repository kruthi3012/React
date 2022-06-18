import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.func1} type="text" value={props.inputText} />
      <button onClick={props.func2}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
