import { useParams } from "react-router-dom";

const NumberPage = () => {
  const urlParams = useParams();
  return <div>{urlParams.numberId}</div>;
};
export default NumberPage;
