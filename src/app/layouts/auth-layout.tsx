import { Outlet } from "react-router";

export default function AuthLayout() {
    return (
        <div className="flex-1 bg-(--bg-color)">
            <Outlet />
        </div>
    )
}