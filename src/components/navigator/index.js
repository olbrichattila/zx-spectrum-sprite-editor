import React from "react";
import Button from "../button";

const Navigator = ({
  isPlaying,
  onResetClick,
  onPlayFramesClick,
  onCopyFrameClick,
  onPasteFrameClick,
  onParseDataClick,
  onGetSpriteDataClick,
}) => {
  return (
    <div className="action-buttons">
      <Button onClick={() => onResetClick()}>Reset</Button>
      <Button onClick={() => onPlayFramesClick()}>
        {isPlaying ? "Stop playing frames" : "Play frames"}
      </Button>
      <Button onClick={() => onCopyFrameClick()}>Copy Frame</Button>
      <Button onClick={() => onPasteFrameClick()}>Paste Frame</Button>
      <Button onClick={() => onParseDataClick()}>Pharse data</Button>
      <Button onClick={() => onGetSpriteDataClick()}>Get sprite data</Button>
    </div>
  );
};

Navigator.defaultProps = {
  isPlaying: false,
  onResetClick: () => {},
  onPlayFramesClick: () => {},
  onCopyFrameClick: () => {},
  onPasteFrameClick: () => {},
  onParseDataClick: () => {},
  onGetSpriteDataClick: () => {},
};

export default Navigator;
