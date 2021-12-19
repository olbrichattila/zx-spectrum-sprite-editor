import { useState, useEffect } from "react";
import {
  getSpriteData,
  convertSpriteDataToText,
  parseSpriteData,
} from "./helpers/sprite";
import { getDefaultMatrix, getDefaultFrames } from "./helpers/editor";
import Navigator from "./components/navigator";
import SizeSelector from "./components/sizeSelector";
import FrameSelector from "./components/frameSelector";
import SpriteEditor from "./components/spriteEditor";
import SpritePreview from "./components/spritePreview";
import Error from "./components/error";
import FrameDataEditor from "./components/frameDataEditor";
import "./App.scss";

function App() {
  const [currentWidth, setCurrentWidth] = useState(16);
  const [currentHeight, setCurrentHeight] = useState(16);
  const [spriteName, setSpriteName] = useState("frame");
  const [frames, setFrames] = useState(
    getDefaultFrames(currentWidth, currentHeight)
  );
  const [selectedFrameId, setSelectedFrameId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [frameCopyBuffer, setFrameCopyBuffer] = useState(
    getDefaultMatrix(currentWidth, currentHeight)
  );
  const [spriteDataText, setSpriteDataText] = useState("");
  const [error, setError] = useState();

  const onReset = () => {
    setFrames(getDefaultFrames(currentWidth, currentHeight));
  };

  const onSpriteEditorChange = (matrix) => {
    const newFrames = [...frames];
    newFrames[selectedFrameId] = matrix;
    setFrames(newFrames);
  };

  // if play button pressed, rotate frames
  if (isPlaying) {
    setTimeout(() => {
      const newFrameId = selectedFrameId === 7 ? 0 : selectedFrameId + 1;
      setSelectedFrameId(newFrameId);
    }, 50);
  }

  // reset data if widht or height changes
  useEffect(() => {
    setFrames(getDefaultFrames(currentWidth, currentHeight));
    setSpriteDataText("");
  }, [currentWidth, currentHeight]);

  return (
    <>
      <h1>ZX Spectrum sprite editor</h1>
      <SizeSelector
        onWidthChange={(width) => setCurrentWidth(width)}
        onHeightChange={(height) => setCurrentHeight(height)}
      />
      <div className="preview-box">
        <span>Sprite Name:</span>
        <input
          type="text"
          value={spriteName}
          onChange={(event) => setSpriteName(event.target.value)}
        />
      </div>
      <Navigator
        isPlaying={isPlaying}
        onResetClick={() => onReset()}
        onPlayFramesClick={() => setIsPlaying(!isPlaying)}
        onCopyFrameClick={() => setFrameCopyBuffer(frames[selectedFrameId])}
        onPasteFrameClick={() => onSpriteEditorChange(frameCopyBuffer)}
        onParseDataClick={() => {
          const parsedData = parseSpriteData(spriteDataText);
          if (Array.isArray(parsedData) && parsedData.length === 8) {
            setFrames(parsedData);
          } else {
            setError(
              "Cannot parse inputted data, please check if the dimensions matching your source data (width, height)."
            );
          }
        }}
        onGetSpriteDataClick={() => {
          const data = getSpriteData(frames, currentWidth);
          setSpriteDataText(convertSpriteDataToText(spriteName, data));
        }}
      />
      <Error message={error} onHide={() => setError(null)} />
      <div className="preview-box">
        <span>Preview:</span>
        <SpritePreview
          width={currentWidth}
          height={currentHeight}
          matrix={[...frames[selectedFrameId]]}
        />
      </div>
      <div className="editors">
        <SpriteEditor
          width={currentWidth}
          height={currentHeight}
          matrix={[...frames[selectedFrameId]]}
          onChange={(matrix) => onSpriteEditorChange(matrix)}
        />

        <FrameSelector
          selectedFrameId={selectedFrameId}
          onChangeFrameId={(frameId) => setSelectedFrameId(frameId)}
        />
      </div>
      <FrameDataEditor
        text={spriteDataText}
        onChange={(text) => setSpriteDataText(text)}
      />
    </>
  );
}

export default App;
