import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import Q1Page from "../pages/q1";
import Q2Page from "../pages/q2";
import Q3Page from "../pages/q3";
import RootLayout from "../layouts/layout";
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
        path: "q1",
        element: <Q1Page />,
      },
      {
        path: "q2",
        element: <Q2Page />,
      },
      {
        path: "q3",
        element: <Q3Page />,
      },
    ],
  },
]);
export default router;
