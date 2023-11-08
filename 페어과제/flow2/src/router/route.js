import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/layout";
import MainPage from "../pages/main";
import NumPage from "../pages/num";
import NumParamsPage from "../pages/num1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/num",
        element: <NumPage />,
      },
      {
        path: "/num?num=",
        element: <NumParamsPage />,
      },
    ],
  },
]);
export default router;
// 내가 원하는것은 하나의 컴포넌트를 생성후 그컴포넌트는 현재의 주소를 입력값으로  {location.pathname}보여주는다

//그리고  그하나의 컴포넌트는 id값만다르다
