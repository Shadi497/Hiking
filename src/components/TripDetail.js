import { DetailWrapper } from "../styles";
import { useParams, Redirect, Link } from "react-router-dom";
import trips from "./Trips";
import Items from "./Items";

const TripDetail = (props) => {
  const { tripSlug } = useParams();

  const trip = props.trips.find((trip) => trip.slug === tripSlug);

  const triprecommend = trips
    .filter(
      (fliteredtrip) => fliteredtrip.difficulty === trip.difficulty && fliteredtrip.id !== trip.id
    )
    .map((fliteredtrip) => <Items key={fliteredtrip.id} trip={fliteredtrip} />);

  if (!trip) return <Redirect exact to="/" />;

  return (
    <DetailWrapper>
      <img alt={trip.name} src={trip.image} />
      <h1>{trip.name}</h1>
      <p>{trip.city}</p>
      <p>{trip.des}</p>
      <p>{trip.length} miles</p>
      <p>{trip.difficulty}</p>
      <p>{trip.rating}</p>
      <Link to={`/trips`}>
        <button onClick={() => props.setTrip(null)}>Back</button>
      </Link>

      {/* <Link to={`/trips/the-needles-traverse`}>
        <button onClick={() => props.setTrip(null)}>Recommend Trips</button>
      </Link> */}
      {triprecommend}
      {/* <button onClick={() => props.setTrip()}>{triprecommend}</button> */}
    </DetailWrapper>
  );
};

export default TripDetail;
