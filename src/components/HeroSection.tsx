import { motion } from "framer-motion";
import mascot from "@/assets/mascot.png";

const FloatingEmoji = ({ emoji, delay, x, y }: { emoji: string; delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute text-3xl sm:text-5xl select-none pointer-events-none"
    style={{ left: x, top: y }}
    animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    {emoji}
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse_glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-secondary/20 blur-[100px] animate-pulse_glow" style={{ animationDelay: "1s" }} />

      {/* Floating emojis */}
      <FloatingEmoji emoji="🚀" delay={0} x="10%" y="20%" />
      <FloatingEmoji emoji="🐸" delay={0.5} x="80%" y="15%" />
      <FloatingEmoji emoji="💎" delay={1} x="15%" y="70%" />
      <FloatingEmoji emoji="🔥" delay={1.5} x="85%" y="65%" />
      <FloatingEmoji emoji="🌙" delay={0.8} x="50%" y="10%" />
      <FloatingEmoji emoji="⚡" delay={1.2} x="70%" y="80%" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mx-auto mb-8"
        >
          <img
            src={mascot}
            alt="FROGX Mascot"
            width={200}
            height={200}
            className="mx-auto drop-shadow-[0_0_30px_hsl(150,80%,50%,0.4)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-4xl sm:text-6xl lg:text-8xl font-black leading-tight mb-4"
        >
          <span className="text-foreground">THE FASTEST</span>
          <br />
          <span className="text-primary text-glow-purple">FROG</span>{" "}
          <span className="text-secondary text-glow-green">ON SOLANA</span>{" "}
          <span>🚀</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-body"
        >
          Born from the swamps of Solana. No roadmap needed when you're already on the moon.
          <br />
          <span className="text-secondary font-semibold">Just vibes, memes, and 400ms finality. 🐸⚡</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground box-glow-purple hover:scale-110 transition-transform duration-200"
          >
            🐸 BUY ON PUMP.FUN
          </a>
          <a
            href="https://jup.ag"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-secondary font-display text-sm font-bold text-secondary-foreground box-glow-green hover:scale-110 transition-transform duration-200"
          >
            ⚡ TRADE ON JUPITER
          </a>
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border border-border font-display text-sm font-bold text-foreground hover:border-primary hover:text-primary transition-all duration-200"
          >
            📊 DEX SCREENER
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50"
        >
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-xs text-muted-foreground font-body">Powered by</span>
          <span className="text-xs font-bold text-foreground font-display">SOLANA</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
