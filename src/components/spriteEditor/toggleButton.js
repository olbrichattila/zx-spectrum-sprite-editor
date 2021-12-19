import React from "react";
import "./toggleButton.scss";

const ToggleButton = ({ isSelected, onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className={`toggle-button${isSelected ? " selected" : ""}`}
    ></div>
  );
};

ToggleButton.defaultProps = {
  isSelected: false,
  onClick: () => {},
};

export default ToggleButton;
