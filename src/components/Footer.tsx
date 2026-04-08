import { useState } from "react";
import { motion } from "framer-motion";

const CONTRACT_ADDRESS = "FRoGX...7xK9pQr5mN2wB4vZ8dH3jL6cT1fA0eY";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-muted-foreground font-body mb-4">Contract Address</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={copyAddress}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card font-mono text-sm text-foreground hover:border-primary transition-colors"
        >
          <span className="truncate max-w-xs">{CONTRACT_ADDRESS}</span>
          <span className="text-primary">{copied ? "✅" : "📋"}</span>
        </motion.button>
        {copied && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-secondary mt-2"
          >
            Copied to clipboard!
          </motion.p>
        )}

        <div className="flex justify-center gap-6 mt-8 mb-8">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            𝕏 Twitter
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            ✈️ Telegram
          </a>
          <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            📊 DexScreener
          </a>
        </div>

        <p className="text-xs text-muted-foreground/60 font-body max-w-2xl mx-auto">
          ⚠️ $FROGX is a meme coin with no intrinsic value or expectation of financial return.
          This is not financial advice. Always DYOR. Trade at your own risk. 🐸
        </p>

        <p className="text-xs text-muted-foreground/40 mt-4">
          © 2025 $FROGX. All memes reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
