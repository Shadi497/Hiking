import React from "react";
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
    placeholder="Enter the name of the trip"
      onChange={(event) => props.setQuery(event.target.value.toLowerCase()) }
    ></SearchBarStyled>
  );
};

export default SearchBar;
