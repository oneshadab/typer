import { useState, useEffect } from "react";

import { sleepFor } from "../utils/helpers";

import { TICK_TIME } from "../utils/constants";

function useTimer(required) {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (elapsed < required) {
      sleepFor(TICK_TIME).then(() => {
        if (running) {
          setElapsed(elapsed => elapsed + TICK_TIME);
        }
      });
    }
    if (elapsed > required) {
      setElapsed(required);
    }
  }, [elapsed, running, required]);

  function startOrContinue() {
    setRunning(true);
  }

  function start() {
    setElapsed(0);
    setRunning(true);
  }

  function stop() {
    setElapsed(0);
    setRunning(false);
  }

  function pause() {
    setRunning(false);
  }

  const remaining = required - elapsed;
  return { elapsed, pause, remaining, start, startOrContinue, stop, running };
}

export default useTimer;
