import { useNavigate } from "react-router-dom";
//
const MainPage = () => {
  const navigate = useNavigate();

  const navigateToQ1Page = () => {
    navigate("/q1");
    console.log("하기싫어");
  };
  const navigateToQ2Page = () => {
    navigate("/q2");
    console.log("하기싫어");
  };
  const navigateToQ3Page = () => {
    navigate("/q3");
    console.log("하기싫어");
  };

  return (
    <>
      <p>main page입니다</p>
      <button onClick={navigateToQ1Page}>문제 : 1</button>
      <button onClick={navigateToQ2Page}>문제 : 2</button>
      <button onClick={navigateToQ3Page}>문제 : 3</button>
    </>
  );
};

export default MainPage;
