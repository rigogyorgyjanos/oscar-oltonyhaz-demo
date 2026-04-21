import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    const closeMenu = () => setOpen(false)

    const isActive = (path: string) => location.pathname === path

    // 🔒 SCROLL LOCK
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [open])

    return (
        <>
            {/* NAVBAR */}
            <div className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

                    <div className="font-serif text-xl text-white">
                        Oscar öltönyház
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden md:flex gap-8 text-sm items-center text-gray-300">

                        <Link to="/" className={`relative hover:text-white transition ${isActive("/") ? "text-white" : ""}`}>
                            Főoldal
                            {isActive("/") && <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-accent" />}
                        </Link>

                        <Link to="/rolunk" className={`relative hover:text-white transition ${isActive("/rolunk") ? "text-white" : ""}`}>
                            Rólunk
                            {isActive("/rolunk") && <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-accent" />}
                        </Link>

                        <Link to="/galeria" className={`relative hover:text-white transition ${isActive("/galeria") ? "text-white" : ""}`}>
                            Galéria
                            {isActive("/galeria") && <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-accent" />}
                        </Link>

                        <Link to="/kapcsolat" className={`relative hover:text-white transition ${isActive("/kapcsolat") ? "text-white" : ""}`}>
                            Kapcsolat
                            {isActive("/kapcsolat") && <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-accent" />}
                        </Link>

                        <a
                            href="tel:+36301234567"
                            className="bg-accent text-black px-5 py-2 rounded-xl hover:opacity-90 transition"
                        >
                            Időpont
                        </a>

                    </div>

                    {/* MOBILE OPEN */}
                    <button onClick={() => setOpen(true)} className="md:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`fixed inset-0 z-50 transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >

                {/* BACKDROP */}
                <div
                    onClick={closeMenu}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                />

                {/* FULL SCREEN CONTENT (SLIDE FROM TOP) */}
                <div
                    className={`relative w-full h-full  text-white flex flex-col transform transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-10"
                        }`}
                >

                    {/* TOP BAR */}
                    <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
                        <div className="font-serif text-xl">Oscar öltönyház</div>

                        <button onClick={closeMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* LINKS */}
                    <div className="flex flex-col justify-center items-center flex-1 gap-10 text-2xl font-light">

                        <Link to="/" onClick={closeMenu} className={`relative hover:text-white transition ${isActive("/") ? "text-white" : ""}`}>
                            Főoldal
                            {isActive("/") && <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-accent" />}
                        </Link>

                        <Link to="/rolunk" onClick={closeMenu}  className={`relative hover:text-white transition ${isActive("/rolunk") ? "text-white" : ""}`}>
                            Rólunk
                            {isActive("/rolunk") && <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-accent" />}
                        </Link>

                        <Link to="/galeria" onClick={closeMenu}  className={`relative hover:text-white transition ${isActive("/galeria") ? "text-white" : ""}`}>
                            Galéria
                            {isActive("/galeria") && <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-accent" />}
                        </Link>

                        <Link to="/kapcsolat" onClick={closeMenu}  className={`relative hover:text-white transition ${isActive("/kapcsolat") ? "text-white" : ""}`}>
                            Kapcsolat
                            {isActive("/kapcsolat") && <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-accent" />}
                        </Link>


                    </div>

                    {/* CTA BOTTOM */}
                    <div className="p-6 border-t border-white/10">

                        <a
                            href="tel:+36301234567"
                            onClick={closeMenu}
                            className="block text-center bg-accent text-black py-4 rounded-xl font-medium"
                        >
                            Időpontfoglalás telefonon
                        </a>

                    </div>

                </div>
            </div>
        </>
    )
}