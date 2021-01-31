import List from "./components/List";
import Home from "./components/Home";
import TripDetail from "./components/TripDetail";
import { useState } from "react";
import trips from "./components/Trips";
import { Switch, Route, Router } from "react-router-dom";

function App() {
  const [trip, setTrip] = useState(null);
  const [_trips, setTrips] = useState(trips);

  // const display = trip ? (
  // <Route exact path="/trips/:tripSlug">
  //   <TripDetail trip={trips} setTrip={setTrip} />
  // </Route>
  // ) : (
  //   <Route exact path="/trips">
  //     <List setTrip={setTrips} trips={_trips} />
  //   </Route>
  // );

  return (
    <Switch>
      <Route exact path="/trips/:tripSlug">
        <TripDetail trips={trips} setTrip={setTrip} />
      </Route>
      <Route exact path="/trips">
        <List setTrip={setTrips} trips={trips} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      {/* {display} */}
    </Switch>
  );
}

export default App;
