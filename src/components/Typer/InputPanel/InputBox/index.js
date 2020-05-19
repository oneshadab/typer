import React from "react";
import "./index.css";

function InputBox({ text, onInput, onConfirm }) {
  function handleChange(event) {
    const { value } = event.target;
    onInput(value.trim());
  }

  function handleKeyDown(event) {
    const { key } = event;
    if (key === " " || key === "Enter") {
      onConfirm();
    }
  }

  return (
    <input
      className="input input-box"
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}

export default InputBox;
