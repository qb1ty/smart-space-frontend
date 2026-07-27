import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router"

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [isMobileMenuShow, setIsMobileMenuShow] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            window.addEventListener("scroll", handleScroll)

            return () => window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const getNavlinkStyle = ({ isActive }: { isActive: boolean }) =>
        `text-sm font-montserrat font-medium transition-colors duration-200 hover:text-indigo-400 ${
            isActive
                ? "text-indigo-400 font-semibold drop-shadow-[0_0_8px_rgba(129,140,248,0.3)]"
                : "text-slate-300"
        }`

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-2xl shadow-black/40'
                : 'bg-transparent border-b border-transparent py-5'
            }`}
        >
            <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 xl:px-23.25 flex items-center justify-between">
                <div className="w-40 h-10" />

                <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
                    <NavLink to="/" className={getNavlinkStyle} end>
                        Home
                    </NavLink>
                    
                    <NavLink to="/spaces" className={getNavlinkStyle}>
                        Workspaces
                    </NavLink>

                    <NavLink to="/pricing" className={getNavlinkStyle}>
                        Pricing
                    </NavLink>

                    <NavLink to="/about" className={getNavlinkStyle}>
                        About Us
                    </NavLink>

                    <NavLink to="/contact" className={getNavlinkStyle}>
                        Contact Us
                    </NavLink>
                </nav>

                <div className="hidden sm:flex items-center gap-3">
                    <Link
                        to="/auth"
                        className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/80 transition-all duration-200"
                    >
                        <span className="font-montserrat">
                            Sign In
                        </span>
                    </Link>
                    <Link
                        to="/auth/register"
                        className="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-blue-900 hover:bg-blue-700 transition-all duration-200 active:scale-95"
                    >
                        <span className="font-montserrat">
                            Sign Up
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
}