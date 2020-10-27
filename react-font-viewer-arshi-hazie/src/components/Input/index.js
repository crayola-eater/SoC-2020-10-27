import React from "react";

function Input({ handleChange }) {
  return <input type="text" onInput={handleChange} />;
}

export default Input;
