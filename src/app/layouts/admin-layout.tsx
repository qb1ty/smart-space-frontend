import { Outlet } from "react-router";

export default function AdminLayout() {
    return (
        <div className="flex-1 bg-(--bg-color)">
            <Outlet />
        </div>
    )
}