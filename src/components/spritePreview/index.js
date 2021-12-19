import React from "react";
import Pixel from "./pixel";
import "./index.scss";

const SpritePreview = ({ width, height, matrix }) => {
  return (
    <div className="sprite-preview">
      {[...Array(height).keys()].map((xIndex) => (
        <div className="sprite-preview-row" key={xIndex}>
          {[...Array(width).keys()].map((yIndex) => (
            <Pixel key={yIndex} isSelected={matrix[xIndex * width + yIndex]} />
          ))}
        </div>
      ))}
    </div>
  );
};

SpritePreview.defaultProps = {
  width: 16,
  height: 16,
};

export default SpritePreview;
