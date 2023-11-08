import { useSearchParams } from "react-router-dom";

const Number2Page = () => {
  const [params, setParams] = useSearchParams();
  return <div>{params.get("number")}</div>;
};
export default Number2Page;
