import React from 'react';

const brands = [
    { name: "Homenaje Eterno", logo: "/images/brands/logohomenaje.png" },
    { name: "Zenko Dai Sushi", logo: "/images/brands/logozenko.png" },
];

export default function BrandCarousel() {
    return (
        <section className="py-10 bg-gray-900/50 border-y border-gray-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                    Marcas que confían en mi trabajo
                </p>
            </div>

            <div className="relative flex overflow-hidden group">
                <div className="animate-marquee flex gap-12 sm:gap-24 items-center">
                    {/* Repeat brands multiple times to ensure smooth infinite scroll with few items */}
                    {[...Array(10)].map((_, setIndex) => (
                        brands.map((brand, idx) => (
                            <div key={`brand-${setIndex}-${idx}`} className="flex items-center justify-center w-48 h-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </section>
    );
}
