import React from "react";
import trips from "./Data";
import Item from "./Item";
const List = () => {
  const mappedItems = trips.map((trip) => <Item trip={trip} key={trip.id} />);
  return <div>{mappedItems}</div>;
};

export default List;
