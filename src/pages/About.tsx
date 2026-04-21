export default function About() {
    return (
        <div className="bg-primary text-white min-h-screen overflow-hidden relative">

            {/* GLOW BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-125 h-125 bg-accent blur-[180px] opacity-10 rounded-full -top-32 -right-32" />
                <div className="absolute w-100 h-100 bg-accent blur-[160px] opacity-10 rounded-full -bottom-24 -left-24" />
            </div>

            {/* HERO SECTION */}
            <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">

                {/* BACKGROUND IMAGE */}
                <img
                    src="/about.jpg"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-105"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/70" />

                {/* OPTIONAL GLOW (finom luxus fény) */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className=" absolute w-125 h-125 bg-accent blur-[180px] opacity-10 rounded-full -top-32 -right-32" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 text-center px-4">

                    <div className="text-accent tracking-[0.3em] text-xs uppercase mb-4">
                        Oscar Öltönyház
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif mb-6">
                        Rólunk
                    </h1>

                    <p className="text-gray-300 max-w-xl mx-auto">
                        Egy öltönyház, ahol a stílus, a minőség és a személyes figyelem találkozik.
                    </p>

                </div>

            </section>

            {/* CONTENT */}
            <section className="py-24 relative z-10">

                <div className="max-w-4xl mx-auto px-4">

                    <div className="space-y-10 text-gray-300 leading-relaxed text-base md:text-lg">

                        <p>
                            Az öltönyház megnyitását a már meglévő, sikeresen működő menyasszonyi
                            ruhaszalonunk ihlette.
                        </p>

                        <p>
                            Több, mint 3 éves tapasztalat azt mutatja, hogy igény van stílusos,
                            elegáns, minőségi öltönyre megfizethető áron. Mi megalkottuk mindezt
                            az OSCAR megnyitásával.
                        </p>

                        <p>
                            Akár esküvőre, ballagásra, üzleti célra vagy csak a hétköznapokra van
                            szükséged öltönyre, mindenképp gyere el hozzánk.
                        </p>

                        <p>
                            A termékek között inget, cipőt, mellényt és nyakkendőt is kínálunk.
                            Profi eladók segítenek kiválasztani a tökéletes öltönyt egy kellemes,
                            barátságos környezetben.
                        </p>

                        <p>
                            Az általunk kínált férfi öltönyök első osztályú ruházati termékek.
                            Fontos, hogy nem csak egyedinek tűnnek, de kényelmesek is az őket
                            viselők számára.
                        </p>

                        {/* BRAND HIGHLIGHT */}
                        <div className="border-l-2 border-accent pl-4 my-10 text-white">
                            Kiemelt márkáink:{" "}
                            <span className="text-accent">BALANCE</span> és{" "}
                            <span className="text-accent">FILIP LEBELT</span>.
                        </div>

                        <p>
                            Annak érdekében, hogy megismerkedj kínálatunkkal és meggyőződhess az
                            öltönyök minőségéről és rendkívül kedvező árukról, javasoljuk, hogy
                            látogass el üzletünkbe.
                        </p>

                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center">

                        <a
                            href="/kapcsolat"
                            className="bg-accent text-black px-8 py-4 rounded-xl font-medium inline-block hover:scale-[1.02] transition"
                        >
                            Időpont egyeztetés
                        </a>

                    </div>

                </div>

            </section>

        </div>
    )
}