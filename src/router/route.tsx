import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from "../layout/main";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/register",
          element: "REGISTER",
        },
      ],
    },
  ]);