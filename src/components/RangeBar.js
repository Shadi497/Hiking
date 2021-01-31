import RangeSlider from "react-bootstrap-range-slider";
import { useState } from "react";

const RangeBar = (props) => {
  return <RangeSlider onChange={(e) => props.setNumber(e.target.value)} />;
};

export default RangeBar;
