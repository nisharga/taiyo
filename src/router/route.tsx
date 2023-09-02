import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from "../layout/Main";
import { Contact } from "../Pages/Contact/Contact";
import { Chart } from "../Pages/Chart/Chart";
import Map from "../Pages/Map/Map";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
            path: "/chart",
            element: <Chart/>,
        },
        {
            path: "/map",
            element: <Map />,
        },
      ],
    },
  ]);