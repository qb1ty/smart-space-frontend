import { useNavigate } from "react-router"
import { Navigation } from "@/shared/ui/navigation"

export default function NotFoundWidgets() {
    const navigate = useNavigate()

    return (
        <>
            <Navigation />
            <main className="relative flex items-center justify-center min-h-screen overflow-hidden bg-(--bg-color)">
                <div className="flex items-center justify-center w-full max-w-[1920px] px-23.25">
                    <div className="flex flex-col items-center">
                        <span className="font-fredoka text-(--color-primary) font-medium text-[200px] sm:text-[220px] md:text-[268px]">404</span>
                        <div className="flex flex-col items-center gap-2 -mt-36 sm:-mt-40 md:-mt-46">
                            <span className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl">OOOps!</span>
                            <span className="font-montserrat font-semibold text-2xl sm:text-3xl md:text-4xl">Page Not Found</span>

                            <span className="font-montserrat text-center font-light text-base sm:text-lg md:text-xl w-full sm:w-2/3 mt-2">
                                Sorry about that! Please visit out homepage to get where you need to go.
                            </span>
                        </div>

                        <div className="flex items-center justify-center w-full gap-6 mt-4">
                            <button
                                type="button"
                                className="bg-(--color-primary) w-1/2 md:w-1/3 rounded-2xl py-3 cursor-pointer duration-300 transition-transform hover:scale-105"
                                onClick={() => navigate(-1)}
                            >
                                <span className="text-white font-extralight text-sm sm:text-base">Back</span>
                            </button>
                            <button
                                type="button"
                                className="bg-(--color-primary) w-1/2 md:w-1/3 rounded-2xl py-3 cursor-pointer duration-300 transition-transform hover:scale-105"
                                onClick={() => navigate("/")}
                            >
                                <span className="text-white font-extralight text-sm sm:text-base">Back to home</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}