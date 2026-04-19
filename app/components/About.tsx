"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative pt-28 pb-36 md:pt-36 md:pb-44 bg-[var(--bg-secondary)] overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--text-primary) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[3/4] max-w-[440px] mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[var(--border-soft)] z-0 transition-all duration-700 hover:translate-x-[-2px] hover:translate-y-[-2px]" />

              <div className="relative w-full h-full overflow-hidden z-10">
                <Image
                  src="/kate.jpg"
                  alt="Kate Lia — Sports Media Photographer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 440px"
                />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-[var(--bg-primary)] p-5 shadow-[0_8px_40px_var(--shadow-warm)] animate-float">
                <span className="block font-[var(--font-playfair)] text-3xl text-[var(--accent)] italic">
                  5+
                </span>
                <span className="text-[0.72rem] uppercase tracking-[0.25em] text-[var(--text-muted)] font-[var(--font-outfit)]">
                  Years Experience
                </span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <span className="text-[0.72rem] uppercase tracking-[0.4em] text-[var(--text-muted)] font-light font-[var(--font-outfit)]">
              About Kate
            </span>

            <h2 className="mt-4 font-[var(--font-playfair)] text-[clamp(1.8rem,4vw,2.8rem)] leading-tight tracking-tight text-[var(--text-primary)] italic">
              A love for the game,<br />
              a passion for the frame.
            </h2>

            <div className="mt-6 w-12 h-[1px] bg-[var(--accent)]" />

            <p className="mt-8 text-[0.95rem] md:text-base leading-[1.9] text-[var(--text-secondary)] font-light font-[var(--font-outfit)]">
              Hey there! I&apos;m Kate — a sports media photographer based on the
              beautiful shores of Long Island, New York. My camera is my
              companion at every game, every match, every defining moment that
              deserves to be remembered.
            </p>

            <p className="mt-5 text-[0.95rem] md:text-base leading-[1.9] text-[var(--text-secondary)] font-light font-[var(--font-outfit)]">
              I believe every athlete has a story to tell — one that lives in
              the split-second between triumph and effort. My goal is to freeze
              those moments in time with warmth, authenticity, and a touch of
              cinematic magic.
            </p>

            {/* Stats row */}
            <div className="mt-10 flex gap-12 md:gap-16">
              {[
                { num: "200+", label: "Events Covered" },
                { num: "15+", label: "Publications" },
                { num: "50+", label: "Athletes Featured" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="block font-[var(--font-playfair)] text-2xl md:text-3xl text-[var(--accent)] italic">
                    {stat.num}
                  </span>
                  <span className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--text-muted)] font-[var(--font-outfit)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
