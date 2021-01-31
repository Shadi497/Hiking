import React from "react";
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => props.setQuery(event.target.value.toLowerCase())}
    ></SearchBarStyled>
  );
};

export default SearchBar;
