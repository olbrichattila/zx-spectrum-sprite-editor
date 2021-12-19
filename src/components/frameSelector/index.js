import React, { useState, useEffect } from "react";
import SelectorButton from "../frameSelectorButton";
import "./index.scss";

const FrameSelector = ({ selectedFrameId, onChangeFrameId }) => {
  const [selectedFrameIdState, setSelectedFrameIdState] =
    useState(selectedFrameId);

  const onSelectFrameId = (frameId) => {
    setSelectedFrameIdState(frameId);
    onChangeFrameId(frameId);
  };

  useEffect(() => {
    setSelectedFrameIdState(selectedFrameId);
  }, [selectedFrameId]);

  return (
    <div className="frame-selector">
      {[...Array(8).keys()].map((buttonFrameId) => {
        return (
          <SelectorButton
            key={buttonFrameId}
            frameId={buttonFrameId}
            isSelected={selectedFrameIdState === buttonFrameId}
            onClick={() => onSelectFrameId(buttonFrameId)}
          />
        );
      })}
    </div>
  );
};

FrameSelector.defaultProps = {
  selectedFrameId: 0,
  onChangeFrameId: () => {},
};
export default FrameSelector;
