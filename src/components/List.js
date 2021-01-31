import React from "react";
import trips from "./Trips";
import Items from "./Items";
import { ListWrapper, Ranger } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
import RangeSlider from "react-bootstrap-range-slider";

const List = (props) => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState(100);

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
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{mappedItems}</ListWrapper>
    </>
  );
};

export default List;
