import React from "react";
import trips from "./Trips";
import Items from "./Items";
import { ListWrapper, Ranger, DropdownStyle } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
import RangeSlider from "react-bootstrap-range-slider";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useParams } from "react-router-dom";

const List = (props) => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState(100);
  const [dvalue, setDvalue] = useState("");

  const { tripDifficulty } = useParams();

  const handledropped = (e) => {
    setDvalue(e);
  };

  const droppedItems = props.trips
    .filter((trip) => trip.difficulty === dvalue)
    .map((trip) => <Items trip={trip} setTrip={props.setTrip} key={trip.id} />);

  const mappedItems = props.trips
    .filter(
      (trip) => trip.name.toLowerCase().includes(query) && trip.length < value
    )
    .map((trip) => <Items trip={trip} setTrip={props.setTrip} key={trip.id} />);

  return (
    <>
      <Ranger>
        <RangeSlider value={value} onChange={(e) => setValue(e.target.value)} />
      </Ranger>
      <DropdownStyle>
        <DropdownButton title="difficulty" onSelect={handledropped}>
          <Dropdown.Item eventKey="Easy" href="#/trips/easy">
            Easy
          </Dropdown.Item>

          <Dropdown.Item eventKey="Medium" href="#/trips/medium">
            Medium
          </Dropdown.Item>
          <Dropdown.Item eventKey="Hard" href="#/trips/hard">
            Hard
          </Dropdown.Item>
        </DropdownButton>
      </DropdownStyle>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{droppedItems}</ListWrapper>
      <ListWrapper>{mappedItems}</ListWrapper>
    </>
  );
};

export default List;
