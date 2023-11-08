import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Q2Page = () => {
  const trueCount = useRef(0); //true개수를 쌓음
  const falseCount = useRef(0);
  //리랜더 됬을때 배열 안에 문자들을 보여줌
  const [isForceRender, setIsForceRender] = useState(false);
  const navigate = useNavigate();

  const TruFalse = [];
  const onClickTrueBtn = () => {
    TruFalse.push("true");
    if (trueCount.current < 3) {
      trueCount.current += 1;
    } else {
      alert("테스트가 종료되었습니다");
      setIsForceRender((prev) => !prev);
    }
    console.log(trueCount.current);
    console.log(TruFalse);
  };

  const onClickFalseBtn = () => {
    TruFalse.push("False");
    if (trueCount.current < 3) {
      falseCount.current += 1;
    } else {
      alert("테스트가 종료되었습니다");
      setIsForceRender((prev) => !prev);
    }
    console.log(falseCount.current);
    console.log(TruFalse);
  };

  const onClickForceRender = () => {
    setIsForceRender((prev) => !prev);
  };
  const onClickResetBtn = () => {
    TruFalse.length = 0;
    console.log("1");
    setIsForceRender((prev) => !prev);
    trueCount.current = 0;
    falseCount.current = 0;
  };
  const navigateToMainPage = () => {
    navigate("/");
    console.log("하기싫어");
  };

  return (
    <>
      <div>TRUE: {trueCount.current}</div>
      <div>false: {falseCount.current}</div>
      <button onClick={onClickTrueBtn}>True</button>
      <button onClick={onClickFalseBtn}>False</button>
      <button onClick={onClickForceRender}>force-render</button>
      <button onClick={onClickResetBtn}>Reset</button>
      <br />
      <button onClick={navigateToMainPage}>MainPage</button>
    </>
  );
};

export default Q2Page;
//true false를 쌓을려면 배열그리고 배열을 나타 내기?
