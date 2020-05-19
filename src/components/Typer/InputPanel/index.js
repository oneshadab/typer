import React, { useState } from "react";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InputBox from "./InputBox";

import "./index.css";

function InputPanel({
  userInput,
  onUserInput,
  timeRemaining,
  onAnswer,
  onReset
}) {
  return (
    <div className="input-panel">
      <InputBox text={userInput} onInput={onUserInput} onConfirm={onAnswer} />
      <button className="button is-success">{_format(timeRemaining)} </button>
      <button className="button is-info" onClick={onReset}>
        <FontAwesomeIcon icon={faSyncAlt} />
      </button>
    </div>
  );
}

function _format(ms) {
  const minute_mark = 60 * 1000;
  const minutes = Math.floor(ms / minute_mark);
  const seconds = Math.floor((ms % minute_mark) / 1000);

  function _padded(num) {
    return num.toString().padStart(2, "0");
  }

  return `${_padded(minutes)}:${_padded(seconds)}`;
}

export default InputPanel;
