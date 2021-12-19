import React from "react";
import "./pixel.scss";

const Pixel = ({ isSelected }) => {
  return <div className={`pixel${isSelected ? " selected" : ""}`}></div>;
};

Pixel.defaultProps = {
  isSelected: false,
};

export default Pixel;
