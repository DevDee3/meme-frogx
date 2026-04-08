import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Copy, Check } from "lucide-react";

const CONTRACT_ADDRESS = "FRoGX...7xK9pQr5mN2wB4vZ8dH3jL6cT1fA0eY";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative border-t border-border/50 py-16 px-4 overflow-hidden">
      {/* Futuristic scanline overlay */}
      <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-[0.03]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="text-xs text-muted-foreground font-display tracking-[0.3em] uppercase mb-4">
          Contract Address
        </p>
        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(270 80% 60% / 0.3)" }}
          whileTap={{ scale: 0.98 }}
          onClick={copyAddress}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm font-mono text-sm text-foreground hover:border-primary/50 transition-all duration-300"
        >
          <span className="truncate max-w-xs">{CONTRACT_ADDRESS}</span>
          {copied ? (
            <Check size={16} className="text-secondary" />
          ) : (
            <Copy size={16} className="text-primary" />
          )}
        </motion.button>
        {copied && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-secondary mt-2 font-display"
          >
            Copied to clipboard!
          </motion.p>
        )}

        <div className="flex justify-center gap-8 mt-10 mb-10">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-display tracking-wider"
          >
            𝕏 Twitter
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-display tracking-wider"
          >
            <Send size={14} /> Telegram
          </a>
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors text-sm font-display tracking-wider"
          >
            📊 DexScreener
          </a>
        </div>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-6" />

        <p className="text-xs text-muted-foreground/60 font-body max-w-2xl mx-auto">
          ⚠️ $FROGX is a meme coin with no intrinsic value or expectation of financial return.
          This is not financial advice. Always DYOR. Trade at your own risk. 🐸
        </p>

        <p className="text-xs text-muted-foreground/40 mt-4 font-display tracking-widest">
          © 2025 $FROGX — ALL MEMES RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
