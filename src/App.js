import List from "./components/List";
import Home from "./components/Home";
import TripDetail from "./components/TripDetail";
import { useState } from "react";
import trips from "./components/Trips";
import { GlobalStyle } from "./styles";
import { Switch, Route, Router } from "react-router-dom";
import Difficulty from "./components/Difficulty";

function App() {
  const [trip, setTrip] = useState(null);
  const [_trips, setTrips] = useState(trips);

  return (
    <div>
      <GlobalStyle />
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
      </Switch>
    </div>
  );
}

export default App;
