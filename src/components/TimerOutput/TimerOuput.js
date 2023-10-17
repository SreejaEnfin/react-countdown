import React, { useEffect, useState, useContext } from "react";
import "./TimerOutput.css";
// import { userContext } from "../../Contexts/userContext";

function TimerOuput({
  TimerData,
  setInputData,
  pauseFlag,
  resetFlag,
  orgInput,
}) {
  const [pauseValue, setPauseValue] = useState("0");
  // const { inputData } = useContext(userContext);
  // console.log(inputData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      calRemainingTime(TimerData);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [TimerData]);

  useEffect(() => {
    console.log(pauseFlag, "pauseFlagpauseFlag", TimerData);
    if (!pauseFlag) {
      calRemainingTime(TimerData);
    }
  }, [pauseFlag]);

  useEffect(() => {
    console.log(resetFlag, "resetflag", TimerData);
    if (resetFlag) {
      setInputData(orgInput);
    }
  }, [resetFlag]);

  function calRemainingTime(calc) {
    if (!pauseFlag) {
      console.log("Not Paused");
      if (calc.seconds > 0) {
        const dummyObj = {
          hours: calc.hours,
          seconds: calc.seconds - 1,
          minutes: calc.minutes,
        };
        setInputData(dummyObj);
        setPauseValue(dummyObj);
      } else if (calc.seconds === 0) {
        if (calc.minutes === 0) {
          if (calc.hours === 0) {
            return setInputData({ hours: "", minutes: "", seconds: "" });
          } else {
            const dummyObj1 = {
              seconds: 59,
              minutes: 59,
              hours: calc.hours === 1 ? "0" : calc.hours - 1,
            };
            console.log(dummyObj1, "when hours is 1");
            setInputData(dummyObj1);
            setPauseValue(dummyObj1);
          }
        }
        const dummyObj = {
          hours: calc.hours,
          minutes: calc.minutes - 1 >= 0 ? calc.minutes - 1 : 0,
          seconds: 59,
        };
        setInputData(dummyObj);
        setPauseValue(dummyObj);
      }
    } else {
      console.log("Paused", pauseValue);
      setInputData(pauseValue);
    }
  }

  return (
    <div className="timer-output">
      {TimerData.hours} : {TimerData.minutes} : {TimerData.seconds}
    </div>
  );
}

export default TimerOuput;
