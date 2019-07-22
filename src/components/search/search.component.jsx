import React from "react";

export const Search = ({ placeholder, handleChange }) => {
  return (
    <div className="form-group">
      <input
        type="search"
        placeholder={placeholder}
        className="form-control"
        onChange={handleChange}
      />
    </div>
  );
};
