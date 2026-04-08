import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "How to Buy", href: "#how-to-buy" },
  { label: "Socials", href: "#community" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-display text-xl font-black text-primary text-glow-purple tracking-wider">
            $FROGX
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-display tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(270 85% 62% / 0.4)" }}
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-primary font-display text-xs font-bold text-primary-foreground box-glow-purple transition-all duration-300"
            >
              BUY NOW
            </motion.a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border/50 px-4 pb-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-xs font-display tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-center px-4 py-2.5 rounded-lg bg-primary font-display text-xs font-bold text-primary-foreground box-glow-purple"
          >
            BUY NOW
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
