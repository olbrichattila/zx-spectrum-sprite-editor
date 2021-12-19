import React from "react";

const SizeDropdown = ({ sizes, onChange }) => {
  return (
    <select
      defaultValue={16}
      onChange={(event) => onChange(parseInt(event.target.value))}
    >
      {sizes.map((size) => (
        <option key={size}>{size}</option>
      ))}
    </select>
  );
};

SizeDropdown.defaultProps = {
  onChange: () => {},
};

export default SizeDropdown;
