import { motion } from "framer-motion";
import mascot from "@/assets/mascot.png";

const FloatingEmoji = ({ emoji, delay, x, y }: { emoji: string; delay: number; x: string; y: string }) => (
  <motion.div
    className="absolute text-2xl sm:text-4xl select-none pointer-events-none opacity-60"
    style={{ left: x, top: y }}
    animate={{ y: [0, -25, 0], rotate: [0, 8, -8, 0], opacity: [0.4, 0.7, 0.4] }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    {emoji}
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Layered glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[150px] animate-pulse_glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[130px] animate-pulse_glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px] animate-pulse_glow" style={{ animationDelay: "2s" }} />

      {/* Scanline overlay */}
      <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-[0.02]" />

      {/* Floating emojis */}
      <FloatingEmoji emoji="🚀" delay={0} x="8%" y="20%" />
      <FloatingEmoji emoji="🐸" delay={0.5} x="85%" y="15%" />
      <FloatingEmoji emoji="💎" delay={1} x="12%" y="72%" />
      <FloatingEmoji emoji="🔥" delay={1.5} x="88%" y="68%" />
      <FloatingEmoji emoji="🌙" delay={0.8} x="50%" y="8%" />
      <FloatingEmoji emoji="⚡" delay={1.2} x="72%" y="82%" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Mascot with ring glow */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mx-auto mb-8 relative"
        >
          <div className="absolute inset-0 w-[200px] h-[200px] mx-auto rounded-full bg-primary/20 blur-[40px]" />
          <img
            src={mascot}
            alt="FROGX Mascot"
            width={200}
            height={200}
            className="mx-auto relative z-10 drop-shadow-[0_0_40px_hsl(160,90%,45%,0.4)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-4xl sm:text-6xl lg:text-8xl font-black leading-tight mb-6"
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
          className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-body leading-relaxed"
        >
          Born from the swamps of Solana. No roadmap needed when you're already on the moon.
          <br />
          <span className="text-secondary font-semibold">Just vibes, memes, and 400ms finality. 🐸⚡</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(270 85% 62% / 0.5)" }}
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground box-glow-purple transition-all duration-300"
          >
            🐸 BUY ON PUMP.FUN
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(160 90% 45% / 0.5)" }}
            href="https://jup.ag"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-secondary font-display text-sm font-bold text-secondary-foreground box-glow-green transition-all duration-300"
          >
            ⚡ TRADE ON JUPITER
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, borderColor: "hsl(200 90% 55%)" }}
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border border-border font-display text-sm font-bold text-foreground hover:text-accent transition-all duration-300"
          >
            📊 DEX SCREENER
          </motion.a>
        </motion.div>

        {/* Solana badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm"
        >
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-xs text-muted-foreground font-display tracking-[0.2em]">POWERED BY</span>
          <span className="text-xs font-bold text-foreground font-display">SOLANA</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
