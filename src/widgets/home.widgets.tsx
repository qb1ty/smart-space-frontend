import { Community, HeroSection } from "@/features/home";

export default function HomeWidgets() {
    return (
        <main className="flex-1 min-h-screen w-full bg-(--bg-color)">
            <HeroSection />
            <Community />
        </main>
    )
}