import React, { useRef } from "react";
import "./index.scss";

const FrameDataEditor = ({ text, onChange }) => {
  const textareaRef = useRef(null);

  const copyCodeToClipboard = () => {
    if (textareaRef && textareaRef.current) {
      navigator.clipboard.writeText(textareaRef.current.value);
    }
  };

  return (
    <div className="frame-data-editor">
      <p>
        Copy the following lines into your assembly project. Rename frame names
        to reflect what is the sprite about.
        <br />
        <span className="btn-copy" onClick={() => copyCodeToClipboard()}>
          Copy to clipboard
        </span>
      </p>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(event) => onChange(event.target.value)}
      ></textarea>
    </div>
  );
};

FrameDataEditor.defaultProps = {
  text: "",
  onChange: () => {},
};

export default FrameDataEditor;
