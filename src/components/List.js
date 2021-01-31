import React from "react";
import trips from "./Trips";
import Items from "./Items";
import { ListWrapper } from "../styles";
import { useState } from "react";
import SearchBar from "./SearchBar";

const List = () => {
  const [query, setQuery] = useState("");

  const mappedItems = trips
    .filter((trip) => trip.name.toLowerCase().includes(query))
    .map((trip) => <Items trip={trip} key={trip.id} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{mappedItems}</ListWrapper>
    </>
  );
};

export default List;
