import React from "react";

import TextOptions from "./TextOptions";
import Score from "./Score";

import "./index.css";

function ScorePanel({ onTextChange, answers, timeElapsed }) {
  return (
    <div className="score-panel">
      <TextOptions onTextChange={onTextChange} />
      <Score answers={answers} timeElapsed={timeElapsed} />
    </div>
  );
}

export default ScorePanel;
