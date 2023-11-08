import { useEffect, useRef, useState } from "react";
import Modal from "../components/modal";

const ModalControl = () => {
  const [message, setMessage] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    if (!isOpenModal) {
      setMessage("모달이 보여지지 않고 있습니다");
      divRef.current.style.color = "red";
    }
    if (isOpenModal) {
      setMessage("모달이 보여지고 있습니다");
      divRef.current.style.color = "green";
    }
  }, [isOpenModal]);

  const onClickModalBtn = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <div>
      <div id="color" ref={divRef}>
        {message}
      </div>
      {isOpenModal && <Modal />}
      <button onClick={onClickModalBtn}>
        {isOpenModal ? "숨기기" : "보이기"}
      </button>
    </div>
  );
};
export default ModalControl;
