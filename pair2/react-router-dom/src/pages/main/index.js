import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const onAlert = () => {
    alert("다른 페이지로 이동합니다");
  };
  const navigate = useNavigate();
  const onNavigateToNumberPage = () => {
    navigate("/:numberId");
  };
  return (
    <button
      onClick={() => {
        onAlert(), onNavigateToNumberPage();
      }}
    >
      다른 페이지로 이동
    </button>
  );
};
export default MainPage;
