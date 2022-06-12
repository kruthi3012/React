import React from "react";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt="avatar_img" />
      <p>{props.no}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
