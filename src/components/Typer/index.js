import React, { useState, useEffect } from "react";

import "./index.css";

import { DURATION_IN_MS } from "../../utils/constants";
import useTimer from "../../hooks/useTimer";

import InputPanel from "./InputPanel";
import ScorePanel from "./ScorePanel";
import WordBox from "./WordBox";

function Typer() {
  const timer = useTimer(DURATION_IN_MS);
  const [words, setWords] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    // Watch for done
    if (answers.length >= words.length) {
      timer.pause();
    }
  }, [answers, words, timer]);

  function handleUserInput(newUserInput) {
    timer.startOrContinue();
    setUserInput(newUserInput);
  }

  function handleReset() {
    timer.stop();
    setAnswers([]);
    setUserInput("");
  }

  function handleAnswer() {
    if (userInput.length === 0) {
      return; // Don't accept empty inputs
    }

    const currentIndex = answers.length;
    const word = words[currentIndex];
    const answer = { word, isCorrect: word === userInput };
    setAnswers([...answers, answer]);
    setUserInput("");
  }

  function handleTextChange(newText) {
    setWords(newText.split(" "));
    handleReset();
  }

  return (
    <div className="typer">
      <ScorePanel
        onTextChange={handleTextChange}
        answers={answers}
        timeElapsed={timer.elapsed}
      />
      <WordBox userInput={userInput} words={words} answers={answers} />
      <InputPanel
        userInput={userInput}
        onUserInput={handleUserInput}
        onAnswer={handleAnswer}
        onReset={handleReset}
        timeRemaining={timer.remaining}
      />
    </div>
  );
}

export default Typer;
