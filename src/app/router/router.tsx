import { createBrowserRouter } from "react-router";
import { AdminLayout, AuthLayout, MainLayout } from "@app/layouts";

import { NotFoundPages } from "@/pages";
import { Error } from "@/shared/ui/global";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: []
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
        children: []
    },
    {
        path: "*",
        element: <NotFoundPages />
    }
])