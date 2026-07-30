import { Link } from "react-router"

interface ILogo {
    replace?: boolean
}

export default function Logo({
    replace = false
}: ILogo) {
    return (
        <Link
            to="/"
            className="flex items-center transition-opacity duration-200 hover:opacity-80"
            replace={replace}
        >
            <img
                src="./smart-space.png"
                alt="Smart Space logo"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain brightness-0 invert scale-125 translate-y-2.5" 
            />
            <div className="flex flex-col">
                <span className="text-base sm:text-xl font-medium text-white font-montserrat">
                    Smart Space
                </span>
                <span className="text-xs lg:text-sm text-slate-300 font-montserrat">
                    Portfolio Project
                </span>
            </div>
        </Link>
    )
}