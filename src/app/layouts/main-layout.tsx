import { Outlet } from "react-router";
import { Navigation } from "@/shared/ui/navigation";

export default function MainLayout() {
    return (
        <div className="flex-1 bg-(--bg-color)">
            <Navigation />
            <Outlet />
        </div>
    )
}