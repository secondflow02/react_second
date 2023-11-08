import { useParams } from "react-router-dom";

const NumParamsPage = () => {
  const { num } = useParams();

  return (
    <>
      :)
      <p>{num}페이지 입니다</p>
    </>
  );
};
export default NumParamsPage;
