import React from "react";

function Todoitem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.new}</li>
    </div>
  );
}

export default Todoitem;
