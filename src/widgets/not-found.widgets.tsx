import { useNavigate } from "react-router"

export default function NotFoundWidgets() {
    const navigate = useNavigate()

    return (
        <main className="relative flex items-center justify-between min-h-screen overflow-hidden bg-(--bg-dark) px-23.25">
            <div className="flex flex-col items-center">
                <span className="font-fredoka text-(--bg-foreground) font-medium text-[268px]">404</span>
                <div className="flex flex-col items-center gap-2 -mt-46">
                    <span className="font-montserrat text-white text-4xl">OOOps!</span>
                    <span className="font-montserrat text-white text-4xl">Page Not Found</span>

                    <span className="font-montserrat text-white text-center font-extralight text-xl w-2/3 mt-2">
                        Sorry about that! Please visit out homepage to get where you need to go.
                    </span>
                </div>

                <div className="flex items-center justify-center w-full gap-6 mt-4">
                    <button
                        type="button"
                        className="bg-(--bg-foreground) w-1/3 rounded-2xl py-3 cursor-pointer duration-300 transition-transform hover:scale-105"
                        onClick={() => navigate(-1)}
                    >
                        <span className="text-white font-extralight">Back</span>
                    </button>
                    <button
                        type="button"
                        className="bg-(--bg-foreground) w-1/3 rounded-2xl py-3 cursor-pointer duration-300 transition-transform hover:scale-105"
                        onClick={() => navigate("/")}
                    >
                        <span className="text-white font-extralight">Back to homepage</span>
                    </button>
                </div>
            </div>

            <div></div>
        </main>
    )
}