import React from "react";
import trips from "./Trips";
import Items from "./Items";
import { ListWrapper } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
import RangeSlider from "react-bootstrap-range-slider";

const List = () => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState(100);

  //   const ch = () => {
  //     if (value >= 0) {
  //       return trips
  //         .filter((trip) => trip.length <= value)
  //         .map((trip) => <Items trip={trip} key={trip.id} />);
  //     } else if (value === 0) {
  //       trips
  //         .filter((trip) => trip.name.toLowerCase().includes(query))
  //         .map((trip) => <Items trip={trip} key={trip.id} />);
  //     }
  //   };
  const mappedItems = trips
    .filter(
      (trip) => trip.name.toLowerCase().includes(query) && trip.length < value
    )
    .map((trip) => <Items trip={trip} key={trip.id} />);

  const filterNumber = trips
    .filter((trip) => trip.length <= value)
    .map((trip) => <Items trip={trip} key={trip.id} />);

  return (
    <>
      <RangeSlider value={value} onChange={(e) => setValue(e.target.value)} />
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{mappedItems}</ListWrapper>
    </>
  );
};

export default List;
