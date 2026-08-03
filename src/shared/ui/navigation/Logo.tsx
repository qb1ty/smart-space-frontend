import { Link } from "react-router"
import { BsTriangleFill, BsTriangle } from "react-icons/bs"

interface ILogo {
    replace?: boolean
}

export default function Logo({
    replace = false
}: ILogo) {
    return (
        <Link
            to="/"
            className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
            replace={replace}
        >
            <div className="">
                <div className="flex">
                    <BsTriangleFill size={12} fill="#4CAF4F" className="rotate-180" />
                    <BsTriangleFill size={12} fill="#4CAF4F" className="-ml-0.5" />
                    <BsTriangle size={12} color="#000000" className="ml-2" />
                </div>

                <div className="flex ml-2.5">
                    <BsTriangle size={12} color="#000000" className="rotate-180" />
                    <BsTriangleFill size={12} fill="#4CAF4F" className="-ml-0.5 -mr-0.5" />
                    <BsTriangleFill size={12} fill="#4CAF4F" className="rotate-180" />
                </div>
            </div>

            <div className="flex flex-col">
                <span className="text-base xs:text-xl sm:text-2xl font-semibold font-fredoka tracking-wide">
                    Smart Space
                </span>
            </div>
        </Link>
    )
}