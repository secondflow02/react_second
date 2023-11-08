import { useRef } from "react";

const UseRef = () => {
  const count = useRef(0);
  let array = [];

  const onClickKnownBtn = () => {
    array.push("true");
    count.current++;
    console.log(count.current);
    console.log(array);

    if (count.current == 3)
      return (
        alert("테스트가 종료되었습니다."), (count.current = 0), (array = [])
      );
  };

  const onClickUnKnownBtn = () => {
    array.push("false");
    console.log(array);
  };

  return (
    <>
      <div>{count.current}</div>
      <button onClick={onClickKnownBtn}>알아요</button>
      <button onClick={onClickUnKnownBtn}>몰라요</button>
    </>
  );
};
export default UseRef;
