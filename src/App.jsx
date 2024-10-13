import React from "react";
import "./styles/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import PageFive from "./pages/PageFive";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <PageOne />
  },
  {
    path: "/page-two",
    element: <PageTwo />
  },
  {
    path: "/page-three",
    element: <PageThree />
  },
  {
    path: "/page-four",
    element: <PageFour />
  },
  {
    path: "/page-five",
    element: <PageFive />
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
