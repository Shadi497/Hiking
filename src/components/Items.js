import React from "react";
import { Wrapper } from "../styles";
import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <Wrapper>
      <Link to={`/trips/${props.trip.slug}`}>
        <img
          src={props.trip.image}
          alt={props.trip.name}
          // onClick={() => props.setTrip(props.trip)}
        />
      </Link>
      <p>{props.trip.name}</p>
      <p>{props.trip.city}</p>
      <p>{props.trip.difficulty}</p>
      <p>{props.trip.rating}</p>
    </Wrapper>
  );
};

export default Items;
