import React from "react";
import "./index.css";

function WordBox({ words, answers, userInput }) {
  function isCorrect(word, index) {
    if (index > answers.length) {
      return false;
    }
    if (index === answers.length) {
      return _prefixMatch(word, userInput);
    }
    return answers[index].isCorrect;
  }

  return (
    <div className="word-box">
      {words.map((word, index) => (
        <>
          <Word
            word={word}
            isDone={index < answers.length}
            isSelected={index === answers.length}
            isCorrect={isCorrect(word, index)}
          />
          &nbsp;
        </>
      ))}
    </div>
  );
}

function Word({ word, isSelected, isCorrect, isDone }) {
  const correctClass = isCorrect ? "correct" : "wrong";
  const stateClass = isDone ? "done" : isSelected ? "selected" : "to-do";

  return <div className={`word ${correctClass} ${stateClass}`}>{word}</div>;
}

function _prefixMatch(word, targetWord) {
  return word.substr(0, targetWord.length) === targetWord;
}

export default WordBox;
