import React from "react";
import { Wrapper } from "../styles";

const Items = (props) => {
  return (
    <Wrapper>
      <img src={props.trip.image} alt={props.trip.name} />
      <p>{props.trip.name}</p>
      <p>{props.trip.city}</p>
      <p>{props.trip.difficulty}</p>
      <p>{props.trip.rating}</p>
      <p>{props.trip.length}</p>
      {/* <p>trip.des</p> */}
    </Wrapper>
  );
};

export default Items;
