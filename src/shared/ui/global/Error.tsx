import { useEffect } from "react"
import { useRouteError } from "react-router"

export default function Error() {
    const error = useRouteError()

    useEffect(() => {
        console.log("Критическая ошибка приложения: ", error)
    }, [error])

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-(--bg-color) px-23.25">
            
        </div>
    )
}