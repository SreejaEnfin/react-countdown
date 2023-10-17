import "./App.css";
import TimerInput from "./components/TimerInput/TimerInput";
import TimerOuput from "./components/TimerOutput/TimerOuput";
import React, { useState } from "react";

function App() {
  const [inputData, setInputData] = useState("");
  const [orgVal, setOrgVal] = useState("");
  const [pauseFlag, setPauseFlag] = useState(false);
  const [resetFlag, setResetFlag] = useState(false);

  const timerInputHandler = (timerData) => {
    setInputData(timerData);
    setOrgVal(timerData);
    // console.log(inputData);
  };

  return (
    <>
      <TimerInput
        onSaveTimerInput={timerInputHandler}
        setPauseFlag={setPauseFlag}
        pauseFlag={pauseFlag}
        setResetFlag={setResetFlag}
      />
      <TimerOuput
        TimerData={inputData}
        setInputData={setInputData}
        pauseFlag={pauseFlag}
        resetFlag={resetFlag}
        orgInput={orgVal}
      />
    </>
  );
}

export default App;
