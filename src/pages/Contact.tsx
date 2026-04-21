export default function Contact() {
    return (
        <div className="bg-primary text-white min-h-screen py-32 relative overflow-hidden">

            {/* GLOW BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-[500px] h-[500px] bg-accent blur-[180px] opacity-10 rounded-full -top-40 -right-40" />
                <div className="absolute w-[400px] h-[400px] bg-accent blur-[160px] opacity-10 rounded-full -bottom-40 -left-40" />
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif mb-4">
                        Kapcsolat
                    </h1>

                    <p className="text-gray-400 max-w-xl mx-auto">
                        Időpontfoglalás telefonon vagy Messenger üzenetben.
                        Minden megkeresésre rövid időn belül válaszolunk.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid lg:grid-cols-2 gap-10 items-stretch">

                    {/* LEFT */}
                    <div className="flex flex-col justify-center space-y-6">

                        {/* CONTACT CARD */}
                        <div className="bg-black/30 border border-white/10 p-8 rounded-2xl">

                            <h2 className="text-xl font-serif mb-6">
                                Elérhetőségek
                            </h2>

                            <div className="space-y-4 text-gray-400 mb-8">

                                <p>
                                    <span className="text-white">Cím:</span> Budapest, Népfürdő u. 21 A, 1138
                                </p>

                                <p>
                                    <span className="text-white">Email:</span> info@oscaroltony.hu
                                </p>

                                <p>
                                    <span className="text-white">Telefonszám:</span> +36 30 123 4567
                                </p>

                            </div>
                            <div className="flex flex-col gap-4">

                                <a
                                    href="tel:+36301234567"
                                    className="bg-accent text-black px-6 py-4 rounded-xl text-center font-medium hover:scale-[1.02] transition"
                                >
                                    Hívás indítása
                                </a>

                                <a
                                    href="https://facebook.com"
                                    className="border border-accent text-accent px-6 py-4 rounded-xl text-center hover:bg-accent hover:text-black transition"
                                >
                                    Messenger üzenet
                                </a>

                            </div>

                        </div>

                        {/* INFO BLOCK */}
                        <div className="bg-black/20 border border-white/10 p-6 rounded-2xl text-sm text-gray-400 space-y-2">

                            <p>
                                Időpontfoglalás szükséges a személyes kiszolgálás miatt.
                            </p>

                            <p>
                                Egyszerre egy vendéggel foglalkozunk a nyugodt élmény érdekében.
                            </p>

                            <p>
                                Általában 24 órán belül visszahívunk.
                            </p>

                        </div>

                    </div>

                    {/* RIGHT MAP */}
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">

                        <iframe
                            src="https://www.google.com/maps?q=Budapest%2C%20N%C3%A9pf%C3%BCrd%C5%91%20u.%2021%20A%2C%201138&output=embed"
                            className="w-full h-[530px]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>

                </div>

                {/* FOOTER NOTE */}
                <div className="text-center mt-16 text-gray-500 text-sm">
                    OSCAR Öltönyház – prémium férfi öltönyök Budapesten
                </div>

            </div>
        </div>
    )
}