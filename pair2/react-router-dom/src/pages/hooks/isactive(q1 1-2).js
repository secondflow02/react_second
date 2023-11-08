import { useState } from "react";
import Active from "../components/active";
import NonActive from "../components/nonactive";

const IsActive = () => {
  const [isActive, setIsActive] = useState(true);

  const onActiveBtn = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <button onClick={onActiveBtn}>{isActive ? "비활성화" : "활성화"}</button>
      <div>{isActive ? <Active /> : <NonActive />}</div>
    </>
  );
};
export default IsActive;
