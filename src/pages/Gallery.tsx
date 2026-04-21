import { useState } from "react"

const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
]

export default function Gallery() {
    const [selected, setSelected] = useState<string | null>(null)

    return (
        <div className="bg-primary text-white min-h-screen py-32 relative overflow-hidden">

            {/* GLOW BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-125 h-125 bg-accent blur-[180px] opacity-10 rounded-full -top-50 -left-50" />
                <div className="absolute w-100 h-100 bg-accent blur-[160px] opacity-10 rounded-full -bottom-37.5 -right-37.5" />
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif mb-4">
                        Galéria
                    </h1>
                    <p className="text-gray-400">
                        Öltönyök, részletek és inspiráció
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

                    {images.map((img, i) => (
                        <div
                                        key={i}
                                        onClick={() => setSelected(img)}
                                        className={`
                            relative overflow-hidden rounded-xl cursor-pointer group
                            ${i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}
                        `}
                        >

                            <img
                                src={img}
                                className="w-full h-full object-cover aspect-3/4 md:aspect-auto group-hover:scale-110 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />

                        </div>
                    ))}

                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a
                        href="/kapcsolat"
                        className="bg-accent text-black px-8 py-4 rounded-xl inline-block font-medium hover:scale-[1.02] transition"
                    >
                        Időpont foglalás
                    </a>
                </div>

            </div>

            {/* LIGHTBOX */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={() => setSelected(null)}
                >

                    {/* CLOSE AREA */}
                    <div className="absolute inset-0" />

                    {/* IMAGE */}
                    <img
                        src={selected}
                        className="max-w-[90%] max-h-[85%] rounded-xl shadow-2xl z-10"
                    />

                    {/* CLOSE BUTTON */}
                    <button
                        onClick={() => setSelected(null)}
                        className="absolute top-6 right-6 text-white text-3xl z-20"
                    >
                        ✕
                    </button>

                </div>
            )}

        </div>
    )
}