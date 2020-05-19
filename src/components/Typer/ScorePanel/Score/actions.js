function calculateScore(answers, timeElapsed) {
  return {
    WPM: _calculateWPM(answers, timeElapsed),
    totalCorrect: answers.filter(ans => ans.isCorrect).length,
    total: answers.length
  };
}

function _calculateWPM(answers, timeElapsed) {
  if (timeElapsed === 0) {
    return 0;
  }

  const totalChars = answers
    .filter(ans => ans.isCorrect)
    .reduce((sum, ans) => sum + ans.word.length, 0);
  const totalSpaces = answers.length;
  const totalWords = (totalChars + totalSpaces) / 5;
  const totalMinutes = timeElapsed / (60 * 1000);

  // console.log(totalChars, totalWords, totalMinutes);
  return Math.floor(totalWords / totalMinutes);
}

export { calculateScore };
