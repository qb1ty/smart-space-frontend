import { createBrowserRouter } from "react-router";
import { AdminLayout, AuthLayout, MainLayout } from "@app/layouts";

import { HomePages, NotFoundPages } from "@/pages";
import { LoginPages, RegisterPages } from "@/pages/auth";

import { Error } from "@/shared/ui/global";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <HomePages />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        errorElement: <Error />,
        children: []
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <LoginPages />
            },
            {
                path: "register",
                element: <RegisterPages />
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundPages />
    }
])