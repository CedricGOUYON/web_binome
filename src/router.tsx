import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
export default router;
