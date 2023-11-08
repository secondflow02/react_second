import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Q3Page = () => {
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const [count, setCount] = useState(0);
  const timerRef = useRef(0);
  const isRunning = useRef(false);
  //state =>false

  const onclickOpenBtn = () => {
    setIsTimerVisible((prev) => !prev);
  };

  const startTimer = () => {
    if (isRunning.current == false) {
      timerRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      isRunning.current = true;
    }
    console.log(timerRef.current);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    isRunning.current = false;
  };
  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };

  useEffect(() => {
    if (isTimerVisible) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [isTimerVisible]);

  return (
    <>
      <h1>Timer</h1>
      <button onClick={onclickOpenBtn}>
        {isTimerVisible ? "타이머숨기기" : "타이머 보이기"}
      </button>
      <h1>Timer</h1>
      <div>{count}</div>
      <button onClick={stopTimer}>stop</button>
      <button onClick={startTimer}>restart</button>
      <button onClick={resetTimer}>reset</button>
    </>
  );
};
export default Q3Page;
