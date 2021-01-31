import React from "react";
import { Wrapper } from "../styles";

const Items = (props) => {
  return (
    <Wrapper>
      <img
        src={props.trip.image}
        alt={props.trip.name}
        onClick={() => props.setTrip(props.trip)}
      />
      <p>{props.trip.name}</p>
      <p>{props.trip.city}</p>
      <p>{props.trip.difficulty}</p>
      <p>{props.trip.rating}</p>
    </Wrapper>
  );
};

export default Items;
