import { useNavigate } from "react-router-dom";
//
const MainPage = () => {
  const navigate = useNavigate();

  const navigateToNumPage = () => {
    navigate("/num");
    console.log("하기싫어");
  };

  return (
    <>
      <p>main page입니다</p>
      <button onClick={navigateToNumPage}>num</button>
    </>
  );
};

export default MainPage;
