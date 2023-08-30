import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/LandingPage/LandingPage";
import SignUp from "./Components/Sign_Up/Sign_Up"
import Root from "./Page/Root";
import Login from "./Components/Login/Login";

export default function App() {
    const routers = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {index: true, element: <Layout />},
                {
                    path: 'signup',
                    element: <SignUp />
                },
                {
                    path: 'login',
                    element: <Login />
                }
            ]
        }
    ])

    return <RouterProvider router={routers} />;
}
