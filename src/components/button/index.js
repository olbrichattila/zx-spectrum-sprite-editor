import React from "react";
import "./index.scss";

const Button = ({ onClick, children }) => {
  return (
    <div onClick={() => onClick()} className="button">
      {children}
    </div>
  );
};

Button.defaultProps = {
  children: null,
  onClick: () => {},
};

export default Button;
