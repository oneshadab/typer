import React from "react";
import { calculateScore } from "./actions";

import "./index.css";

function Score({ answers, timeElapsed }) {
  const { WPM, totalCorrect, total } = calculateScore(answers, timeElapsed);
  return (
    <div className="box score">
      <div className="wpm">{WPM} WPM</div>
      <div>
        <div className="is-pulled-left">Correct:</div>
        <div className="is-pulled-right">{totalCorrect}</div>
      </div>
      <div>
        <div className="is-pulled-left">Total:</div>
        <div className="is-pulled-right">{total}</div>
      </div>
    </div>
  );
}

export default Score;
