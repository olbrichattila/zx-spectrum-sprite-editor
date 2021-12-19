import React, { useState, useEffect } from "react";
import ToggleButton from "./toggleButton";
import "./index.scss";

const SpriteEditor = ({ width, height, matrix, onChange }) => {
  const [matrixArray, setMatrixArray] = useState(matrix);

  const toggleMatrix = (xIndex, yIndex) => {
    const newMatrix = [...matrixArray];
    newMatrix[xIndex * width + yIndex] = !newMatrix[xIndex * width + yIndex];
    setMatrixArray(newMatrix);
    onChange(newMatrix);
  };

  useEffect(() => {
    setMatrixArray(matrix);
  }, [matrix]);

  return (
    <div className="sprite-editor">
      {[...Array(height).keys()].map((xIndex) => (
        <div className="sprite-editor-row" key={xIndex}>
          {[...Array(width).keys()].map((yIndex) => (
            <ToggleButton
              key={yIndex}
              isSelected={matrixArray[xIndex * width + yIndex]}
              onClick={() => toggleMatrix(xIndex, yIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

SpriteEditor.defaultProps = {
  width: 16,
  height: 16,
  onChange: () => {},
};

export default SpriteEditor;
