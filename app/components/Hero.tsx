"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] flex items-end overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Floating particles - adapted for light background */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[rgba(196,149,106,0.08)]"
            style={{
              width: `${4 + i * 3}px`,
              height: `${4 + i * 3}px`,
              left: `${15 + i * 14}%`,
              bottom: `${10 + i * 8}%`,
              animation: `floatParticle ${6 + i * 1.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-[3] w-full max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20 h-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 pt-24 pb-24 md:pb-32">
        
        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center z-10">
          {/* Top subtitle line */}
          <div className="animate-fade-in-down delay-200 mb-6 mt-12 lg:mt-0">
            <div className="flex items-center gap-4">
              <span className="block h-[1px] w-0 bg-[var(--text-primary)] animate-draw-line delay-600" />
              <span className="text-[0.72rem] md:text-[0.8rem] uppercase tracking-[0.4em] text-[var(--text-primary)] font-medium font-[var(--font-outfit)]">
                Sports Media Photographer
              </span>
            </div>
          </div>

          {/* Main title */}
          <h1 className="animate-fade-in-up delay-400">
            <span className="block font-[var(--font-playfair)] text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-tight text-[var(--text-primary)] font-normal italic">
              Kate Lia
            </span>
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in-up delay-600 mt-6 md:mt-8 max-w-xl font-[var(--font-playfair)] text-[clamp(1.1rem,2.2vw,1.4rem)] leading-relaxed text-[var(--text-primary)] italic font-medium">
            Capturing the passion, energy & beauty of athletic moments through a
            cinematic lens.
          </p>

          {/* Body text */}
          <p className="animate-fade-in-up delay-800 mt-5 max-w-lg text-[0.92rem] md:text-base leading-[1.8] text-[var(--text-primary)] font-normal font-[var(--font-outfit)]">
            Based in Long Island, New York — working with athletes, teams, and
            publications to tell the stories that unfold between the lines.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up delay-1000 mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              id="hero-cta"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent)] text-[var(--text-primary)] text-[0.82rem] uppercase tracking-[0.25em] font-medium rounded-none overflow-hidden transition-all duration-600 hover:bg-[var(--accent-hover)] hover:text-white hover:shadow-[0_8px_40px_rgba(196,149,106,0.3)] no-underline"
            >
              <span className="relative z-10 font-[var(--font-outfit)]">
                Let&apos;s Work Together
              </span>
              <svg
                className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              {/* Hover sweep */}
              <span className="absolute inset-0 bg-[#b37f55] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-600 z-0" />
            </a>

            <a
              href="#gallery"
              id="hero-gallery-link"
              className="inline-flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.2em] text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-500 font-medium font-[var(--font-outfit)] no-underline"
            >
              View Portfolio
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Floating Portrait Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center z-10 animate-fade-in-up delay-800">
          <div className="relative w-full max-w-[380px] aspect-[4/5] bg-white p-3 rounded-2xl border border-[var(--border-soft)] shadow-[0_20px_60px_rgba(0,0,0,0.05)] pointer-events-auto group hover:-translate-y-3 hover:shadow-[0_40px_80px_var(--shadow-warm)] transition-all duration-700 ease-out">
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src="/kate.jpg"
                alt="Portrait of Kate Lia"
                fill
                priority
                className="object-cover object-[center_20%] transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
            
            {/* Elegant corner accents */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#d4ac8a] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#d4ac8a] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-1400 absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-3">
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[var(--text-secondary)] font-[var(--font-outfit)] [writing-mode:vertical-lr]">
            Scroll
          </span>
          <div className="w-px h-10 bg-[var(--border-soft)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--text-primary)] animate-[scrollDown_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }
      `}</style>
    </section>
  );
}
