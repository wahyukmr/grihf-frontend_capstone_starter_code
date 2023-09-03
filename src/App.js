import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookingConsultation from "./Components/BookingConsultation";
import Layout from "./Components/LandingPage/LandingPage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign_Up/Sign_Up";
import Root from "./Page/Root";

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Layout /> },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "instant-consultation",
          element: <BookingConsultation />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}
