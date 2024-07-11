import React, { useEffect, useState } from "react";
import styles from "./Stopwatch.module.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // time in seconds
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  const handleStartStop = () => {
    setRunning(!running);
  };

  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className={styles.stopwatch}>
      <h1>Stopwatch</h1>
      <div className={styles.time}> Time: {formatTime(time)}</div>
      <button onClick={handleStartStop}>{running ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
