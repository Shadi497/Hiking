import { DetailWrapper, BackButton } from "../styles";
import { useParams, Redirect, Link } from "react-router-dom";
import trips from "./Trips";
import Items from "./Items";

const TripDetail = (props) => {
  const { tripSlug } = useParams();

  const trip = props.trips.find((trip) => trip.slug === tripSlug);

  const triprecommend = trips
    .filter(
      (fliteredtrip) =>
        fliteredtrip.difficulty === trip.difficulty &&
        fliteredtrip.id !== trip.id
    )
    .map((fliteredtrip) => <Items key={fliteredtrip.id} trip={fliteredtrip} />);

  if (!trip) return <Redirect exact to="/" />;

  return (
    <DetailWrapper>
      <h2>{trip.name}</h2>
      <img alt={trip.name} src={trip.image} />
      <p>The City: {trip.city}</p>
      <p>{trip.des}</p>
      <p>{trip.length} miles</p>
      <p>The Difficulty: {trip.difficulty}</p>
      <p>The Rating: {trip.rating}</p>
      <Link to={`/trips`}>
        <BackButton onClick={() => props.setTrip(null)}>Back</BackButton>
      </Link>
      <h2>Recommended Trips</h2>
      {triprecommend}
      {/* <button onClick={() => props.setTrip()}>{triprecommend}</button> */}
    </DetailWrapper>
  );
};

export default TripDetail;
