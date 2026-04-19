"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/gallery-1.png", alt: "Basketball slam dunk in dramatic lighting", sport: "Basketball" },
  { src: "/gallery-2.png", alt: "Soccer player mid-kick at golden hour", sport: "Soccer" },
  { src: "/gallery-3.png", alt: "Tennis player serving with intense focus", sport: "Tennis" },
  { src: "/gallery-4.png", alt: "Baseball pitcher under stadium lights", sport: "Baseball" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[var(--bg-primary)]"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-[rgba(196,149,106,0.3)]" />

      <div className="max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[0.72rem] uppercase tracking-[0.4em] text-[var(--text-muted)] font-light font-[var(--font-outfit)]">
            Selected Work
          </span>
          <h2 className="mt-4 font-[var(--font-playfair)] text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight text-[var(--text-primary)] italic">
            Portfolio
          </h2>
          <div className="mt-5 mx-auto w-12 h-[1px] bg-[var(--accent)]" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`group relative aspect-[4/3] overflow-hidden cursor-pointer transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: visible ? `${300 + idx * 150}ms` : "0ms",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,36,32,0.8)] via-[rgba(44,36,32,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 flex flex-col justify-end p-6 md:p-8">
                <span className="text-[0.7rem] uppercase tracking-[0.35em] text-[#d4ac8a] font-[var(--font-outfit)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {img.sport}
                </span>
                <span className="mt-2 font-[var(--font-playfair)] text-xl md:text-2xl text-white italic transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  View Project
                </span>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[rgba(212,172,138,0.4)] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-12 group-hover:h-12" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[rgba(212,172,138,0.4)] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-12 group-hover:h-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
