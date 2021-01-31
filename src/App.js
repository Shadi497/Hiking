import List from "./components/List";
import Home from "./components/Home";
import TripDetail from "./components/TripDetail";
import { useState } from "react";
import trips from "./components/Trips";

function App() {
  const [trip, setTrip] = useState(null);
  const [_trips, setTrips] = useState(trips);

  const display = trip ? (
    <TripDetail trip={trip} setTrip={setTrip} />
  ) : (
    <List setTrip={setTrip} trips={_trips} />
  );

  return (
    <>
      <Home />
      {display}
    </>
  );
}

export default App;
