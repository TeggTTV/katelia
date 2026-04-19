export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2c2420] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-baseline gap-1.5">
            <span className="font-[var(--font-playfair)] text-2xl text-white italic tracking-wide">
              Kate
            </span>
            <span className="font-[var(--font-outfit)] text-xs uppercase tracking-[0.35em] text-[#d4ac8a] font-light">
              Lia
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {["Home", "Portfolio", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[0.75rem] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.4)] hover:text-[#d4ac8a] transition-colors duration-400 font-[var(--font-outfit)] font-light no-underline"
              >
                {link === "Home" ? link : link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[0.72rem] text-[rgba(255,255,255,0.25)] font-[var(--font-outfit)] font-light tracking-wider">
            © {currentYear} Kate Lia Photography
          </p>
        </div>

        {/* Decorative line */}
        <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(212,172,138,0.15)] to-transparent" />

        <p className="mt-6 text-center text-[0.65rem] text-[rgba(255,255,255,0.15)] font-[var(--font-outfit)] font-light tracking-widest uppercase">
          Long Island, New York
        </p>
      </div>
    </footer>
  );
}
