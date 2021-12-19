import React, { useState, useEffect } from "react";
import "./index.scss";

const Error = ({ message, onHide }) => {
  const [errorMessage, setErrorMessage] = useState(message);
  // hides error message after one second
  useEffect(() => {
    setErrorMessage(message);
    if (message) {
      setTimeout(() => {
        setErrorMessage(null);
        onHide();
      }, 2000);
    }
  }, [message, onHide]);

  return (
    <div className={`error${errorMessage ? " visible" : ""}`}>
      {errorMessage}
    </div>
  );
};

Error.defaultProps = {
  message: null,
  onHide: () => {},
};

export default Error;
