import { motion } from "framer-motion"

export default function Home() {
    return (
        <div>

            {/* HERO */}
            <section className="h-screen relative overflow-hidden">

                {/* BACKGROUND IMAGE */}
                <motion.img
                    src="/hero.jpg"
                    className="absolute w-full h-full object-cover object-top will-change-transform"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                    }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/70" />

                {/* CONTENT */}
                <div className="absolute inset-0 flex items-center z-10">

                    <div className="max-w-6xl mx-auto px-4 w-full">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >

                            <div className="mb-4 text-accent tracking-[0.3em] text-xs uppercase">
                                Oscar Öltönyház
                            </div>

                            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                                Prémium öltönyök
                                <br />
                                személyes kiszolgálással
                            </h1>

                            <p className="text-gray-300 mb-8 max-w-xl text-base md:text-lg">
                                Időpont alapú stúdió – nyugodt, exkluzív vásárlási élmény.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 text-center">

                                <a
                                    href="tel:+36301234567"
                                    className="bg-accent text-black px-7 py-3 rounded-xl font-medium"
                                >
                                    Időpontfoglalás telefonon
                                </a>

                                <a
                                    href="https://facebook.com"
                                    className="border border-accent text-accent px-7 py-3 rounded-xl"
                                >
                                    Facebook oldal megtekintés
                                </a>

                            </div>

                        </motion.div>

                    </div>
                </div>

            </section>

            {/* SHARED BACKGROUND WRAPPER */}
            <div className="relative overflow-hidden isolate">

                {/* GLOW BACKGROUND (ÁTFOLYIK MINDENEN) */}
                <div className="absolute inset-0 pointer-events-none z-10">

                    <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
                        <div className="absolute w-125 h-125 bg-linear-to-r from-accent/20 to-transparent opacity-20 rounded-full -top-37.5 -left-37.5" />
                        <div className="absolute w-100 h-100 bg-linear-to-r from-accent/20 to-transparent opacity-10 rounded-full top-[30%] -right-37.5" />
                        <div className="absolute w-150 h-150 bg-linear-to-r from-accent/20 to-transparent opacity-10 rounded-full -bottom-50 left-[20%]" />
                    </div>
                </div>

                {/* INFO */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="py-24 bg-secondary relative"
                >

                    <div className="relative max-w-6xl mx-auto px-4">

                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif mb-4">
                                Miért válassz minket?
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Egy öltöny nem csak ruhadarab — hanem megjelenés, önbizalom és első benyomás.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Személyes figyelem",
                                    text: "Időpont alapú kiszolgálás – egyszerre egy vendég, teljes fókusz.",
                                },
                                {
                                    title: "Prémium ár-érték",
                                    text: "Minőségi öltönyök elérhető áron, kompromisszumok nélkül.",
                                },
                                {
                                    title: "Teljes megjelenés",
                                    text: "Öltöny, ing, cipő és kiegészítők – minden egy helyen.",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }} // 👉 kisebb mozgás
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: i * 0.08, // 👉 kisebb delay
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true, margin: "-50px" }} // 👉 előbb triggerel
                                    className="bg-black/30 border border-white/10 p-8 rounded-2xl md:hover:border-accent transition transform-gpu will-change-transform"
                                    style={{
                                        backfaceVisibility: "hidden", // 👉 iOS fix
                                        WebkitFontSmoothing: "antialiased"
                                    }}
                                >
                                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                                    <p className="text-gray-400">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-16 grid grid-cols-2 md:grid-cols-4 text-center gap-6 text-sm text-gray-400"
                        >

                            {["48–58", "60–99k", "1", "100%"].map((val, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-accent text-2xl font-semibold">{val}</div>
                                    <div>
                                        {i === 0 && "Mérettartomány"}
                                        {i === 1 && "Ár kategória"}
                                        {i === 2 && "Vendég egyszerre"}
                                        {i === 3 && "Figyelem"}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </motion.section>

                {/* CTA + MAP */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="py-24 bg-primary relative"
                >

                    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-stretch">

                        {/* LEFT */}
                        <div className="flex flex-col justify-center">

                            <h2 className="text-3xl md:text-4xl font-serif mb-6">
                                Foglalj időpontot
                            </h2>

                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Minden vendégünkkel személyesen foglalkozunk, ezért kizárólag
                                időpont alapján dolgozunk.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">

                                <a
                                    href="tel:+36301234567"
                                    className="bg-accent text-black px-6 py-4 rounded-xl text-center font-medium"
                                >
                                    Időpontfoglalás telefonon
                                </a>

                                <a
                                    href="https://facebook.com"
                                    className="border border-accent text-accent px-6 py-4 rounded-xl text-center"
                                >
                                    Írj nekünk Facebookon
                                </a>

                            </div>

                            <p className="text-sm text-gray-500 mt-6">
                                Általában 24 órán belül visszahívunk.
                            </p>

                        </div>

                        {/* RIGHT MAP */}
                        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">

                            <iframe
                                src="https://www.google.com/maps?q=Budapest%2C%20OSCAR%20%C3%96lt%C3%B6nyh%C3%A1z%2C%20N%C3%A9pf%C3%BCrd%C5%91%20u.%2021%20A%2C%201138&output=embed"
                                className="w-full h-112.5"
                                loading="lazy"
                            />

                        </div>

                    </div>
                </motion.section>

            </div >
        </div >
    )
}