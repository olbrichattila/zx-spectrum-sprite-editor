import React from "react";
import "./index.scss";

const SelectorButton = ({ onClick, frameId, isSelected }) => {
  return (
    <div
      onClick={() => onClick()}
      className={`selector-button${isSelected ? " selected" : ""}`}
    >
      Frame {frameId + 1}
    </div>
  );
};

SelectorButton.defaultProps = {
  frameId: 0,
  isSelected: false,
  onClick: () => {},
};

export default SelectorButton;
