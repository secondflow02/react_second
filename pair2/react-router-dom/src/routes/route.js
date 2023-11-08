import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import NumberPage from "../pages/number";
import Number2Page from "../pages/number2";
import UseRef from "../pages/hooks/ref(q2 2-1)";
import IsActive from "../pages/hooks/isactive(q1 1-2)";
import ModalControl from "../pages/hooks/modalcontrol(q1 1-1)";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MainPage />
        <hr />
        <h1>ModalControl</h1>
        <ModalControl />
        <hr />
        <h1>isActive</h1>
        <IsActive />
        <hr />
        <h1>useRef</h1>
        <UseRef />
        <hr />
      </>
    ),
  },
  {
    path: "/:numberId",
    element: <NumberPage />,
  },
  {
    path: "/number2",
    element: <Number2Page />,
  },
]);

export default router;
