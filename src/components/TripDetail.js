import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  const trip = props.trip;

  return (
    <DetailWrapper>
      <img alt={trip.name} src={trip.image} />
      <h1>{trip.name}</h1>
      <p>{trip.city}</p>
      <p>{trip.des}</p>
      <p>{trip.length} miles</p>
      <p>{trip.difficulty}</p>
      <p>{trip.rating}</p>
      <button onClick={() => props.setTrip(null)}>Back</button>
    </DetailWrapper>
  );
};

export default ProductDetail;
