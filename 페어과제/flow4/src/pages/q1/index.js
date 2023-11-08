import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Q1Page = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  const CloseModal = () => {
    return (
      <div style={{ color: "green" }}>"모달이 보여지지 않고 있습니다"</div>
    );
  };
  const OpenModal = () => {
    return <div style={{ color: "red" }}>"모달이 보여지고 있습니다"</div>;
  };
  const ChangeBtn = () => {
    setIsOpenModal((prev) => !prev);
  };
  const navigateToMainPage = () => {
    navigate("/");
    console.log("하기싫어");
  };
  return (
    <div>
      {isOpenModal ? <CloseModal /> : <OpenModal />}
      <button onClick={ChangeBtn}>{isOpenModal ? "숨기기" : "보이기"}</button>
      <br />
      <button onClick={navigateToMainPage}>MainPage</button>
    </div>
  );
};

export default Q1Page;
//1-2를 이해를 못함
