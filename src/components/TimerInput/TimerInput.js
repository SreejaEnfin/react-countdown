import React, { useState } from "react";
import "./TimerInput.css";

function TimerInput({
  onSaveTimerInput,
  setPauseFlag,
  pauseFlag,
  setResetFlag,
}) {
  const [hrs, setHrs] = useState("");
  const [mins, setMins] = useState("");
  const [secs, setSecs] = useState("");

  const hrsHandler = (event) => {
    // console.log(event.target.value);
    setHrs(event.target.value);
  };

  const minsHandler = (event) => {
    setMins(event.target.value);
  };

  const secsHandler = (event) => {
    setSecs(event.target.value);
  };

  const startCountDown = (event) => {
    event.preventDefault();
    const inputData = {
      hours: hrs,
      minutes: mins,
      seconds: secs,
    };
    // console.log(inputData);
    setHrs("");
    setMins("");
    setSecs("");
    onSaveTimerInput(inputData);
  };

  const pauseCountDown = () => {
    setPauseFlag(!pauseFlag);
  };

  const resetCountDown = () => {
    setResetFlag(true);
  };

  return (
    <div className="timer-input">
      <div className="form-inputs">
        <div className="form-input">
          <label htmlFor="hours">Hours</label>
          <input type="number" defaultValue={hrs} onChange={hrsHandler} />
        </div>
        <div className="form-input">
          <label htmlFor="mins">Minutes</label>
          <input defaultValue={mins} onChange={minsHandler} type="number" />
        </div>
        <div className="form-input">
          <label htmlFor="secs">Seconds</label>
          <input defaultValue={secs} onChange={secsHandler} type="number" />
        </div>
      </div>

      <div className="button-inputs">
        <button type="submit" className="button-input" onClick={startCountDown}>
          Start Count Down
        </button>
        <button type="submit" className="button-input" onClick={pauseCountDown}>
          {!pauseFlag ? "Pause Count Down" : "Restart Count Down"}
        </button>
        <button type="submit" className="button-input" onClick={resetCountDown}>
          Reset Count Down
        </button>
      </div>
    </div>
  );
}

export default TimerInput;
