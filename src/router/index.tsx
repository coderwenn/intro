import React from "react";
import Home from "../pages/home";
import { Irouters } from "../types";
import { Navigate } from 'react-router-dom';
import { useRoutes } from 'react-router-dom'
import Login from "../pages/login";
import Comp from "@/pages/comp";


const Details = React.lazy(() => import("@/pages/details/index.tsx"))

export const routers: Irouters[] = [
    {
        path: '/',
        element: <Navigate to="/home" />
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: '/home',
                name: '首页',
                element: <Details />
            }, {
                path: '/home/comp',
                name: '组件',
                element: <Comp />
            }
        ]

    },
    {
        path: '/login',
        element: <Login />
    }
]


const Roters = () => useRoutes(routers)

export default Roters