import React, { useEffect, useState } from "react";

import textOptions from "./data";
import "./index.css";

function TextOptions({ onTextChange }) {
  const [text, setText] = useState(textOptions[0]);

  useEffect(() => {
    onTextChange(text);
  }, []);

  function handleChange(event) {
    const value = event.target.value;
    setText(value);
    onTextChange(value);
  }

  return (
    <div className="select text-options">
      <select value={text} onChange={handleChange}>
        {textOptions.map(textOption => (
          <option className="text-option" value={textOption}>
            {`${textOption.substr(0, 40)}...`}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TextOptions;
