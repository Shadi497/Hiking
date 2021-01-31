import React from "react";
import trips from "./Data";

const Item = (props) => {
  return (
    <div>
      <img src={props.trip.image} alt={props.trip.name} />
      <p>{props.trip.name}</p>
      <p>{props.trip.city}</p>
      <p>{props.trip.difficulty}</p>
      <p>{props.trip.rating}</p>
      {/* <p>trip.des</p> */}
    </div>
  );
};

export default Item;
