import React from "react";
import SizeDropdown from "./sizeDropdown";
import "./index.scss";

const SizeSelector = ({ onWidthChange, onHeightChange }) => {
  const sizes = [8, 16, 24, 32];

  return (
    <div className="size-selector">
      Select Size:
      <br /> Width:
      <SizeDropdown sizes={sizes} onChange={(widht) => onWidthChange(widht)} />
      Height:
      <SizeDropdown
        sizes={sizes}
        onChange={(height) => onHeightChange(height)}
      />
    </div>
  );
};

SizeSelector.defaultProps = {
  onWidthChange: () => {},
  onHeightChange: () => {},
};

export default SizeSelector;
