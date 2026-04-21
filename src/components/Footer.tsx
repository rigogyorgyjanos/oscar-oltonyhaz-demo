import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-secondary border-t border-white/10 text-gray-400">

            <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10">

                {/* BRAND */}
                <div>

                    <div className="font-serif text-xl text-white mb-4">
                        Oscar öltönyház
                    </div>

                    <p className="text-sm leading-relaxed">
                        Prémium férfi öltönyök személyes kiszolgálással Budapesten.
                        Időpont alapú stúdió élmény.
                    </p>

                </div>

                {/* NAV */}
                <div>

                    <div className="text-white mb-4 text-sm tracking-wide">
                        Navigáció
                    </div>

                    <div className="flex flex-col gap-2 text-sm">

                        <Link to="/" className="hover:text-white transition">
                            Főoldal
                        </Link>

                        <Link to="/rolunk" className="hover:text-white transition">
                            Rólunk
                        </Link>

                        <Link to="/galeria" className="hover:text-white transition">
                            Galéria
                        </Link>

                        <Link to="/kapcsolat" className="hover:text-white transition">
                            Kapcsolat
                        </Link>

                    </div>

                </div>

                {/* CONTACT */}
                <div>

                    <div className="text-white mb-4 text-sm tracking-wide">
                        Elérhetőség
                    </div>

                    <div className="flex flex-col gap-2 text-sm">

                        <p>Budapest, Népfürdő u. 21 A, 1138</p>

                        <p>info@oscaroltony.hu</p>

                        <p>+36 30 123 4567</p>

                    </div>

                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">

                © 2026 Öltöny Stúdió – Minden jog fenntartva

            </div>

        </footer>
    )
}