import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const NumPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const navigateToNumPage = (num) => {
    alert("페이지를 이동합니다.");
    setSearchParams({ num: num });
    console.log(useNavigate.search);
    navigate(`/num?num=${num}`);
  };
  const gate = [
    {
      title: "num1",
      road: () => navigateToNumPage(1),
    },
    {
      title: "num2",
      road: () => navigateToNumPage(2),
    },
    {
      title: "num3",
      road: () => navigateToNumPage(3),
    },
  ];

  const navigateToNum1Page = (num) => {
    navigate(`/num${num}`);
  };

  return (
    <>
      <button onClick={navigateToNum1Page(1)}>num1</button>
      <br />
      <button onClick={gate[1].road}>{gate[1].title}</button>
      <br />
      <button onClick={gate[2].road}>{gate[2].title}</button>
    </>
  );
};
export default NumPage;
