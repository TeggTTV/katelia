"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Portfolio", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-[rgba(250,247,244,0.88)] shadow-[0_1px_30px_rgba(196,149,106,0.08)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          className="group flex items-baseline gap-1.5 no-underline"
        >
          <span
            className="font-[var(--font-playfair)] text-2xl md:text-[1.7rem] italic tracking-wide transition-colors duration-500 text-[var(--text-primary)]"
          >
            Kate
          </span>
          <span
            className="font-[var(--font-outfit)] text-xs md:text-sm uppercase tracking-[0.35em] font-light transition-colors duration-500 text-[var(--accent)]"
          >
            Lia
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-[0.82rem] uppercase tracking-[0.2em] font-light no-underline transition-colors duration-400 text-[var(--text-secondary)] hover:text-[var(--accent)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-500 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] rounded transition-all duration-400 bg-[var(--text-primary)] ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`block w-6 h-[1.5px] rounded transition-all duration-400 bg-[var(--text-primary)] ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[1.5px] rounded transition-all duration-400 bg-[var(--text-primary)] ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-600 ease-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pt-4 pb-6 flex flex-col gap-4 backdrop-blur-xl bg-[rgba(250,247,244,0.95)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[0.85rem] uppercase tracking-[0.2em] font-light text-[#6b5e54] no-underline hover:text-[#c4956a] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
