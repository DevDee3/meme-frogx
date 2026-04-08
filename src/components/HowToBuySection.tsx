import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Get Phantom Wallet",
    desc: "Download the Phantom wallet extension or mobile app. It's the go-to Solana wallet.",
    emoji: "👻",
  },
  {
    step: "02",
    title: "Fund with SOL",
    desc: "Buy SOL on any exchange and send it to your Phantom wallet address.",
    emoji: "💰",
  },
  {
    step: "03",
    title: "Go to Pump.fun or Jupiter",
    desc: "Navigate to Pump.fun or Jupiter exchange and connect your wallet.",
    emoji: "🔗",
  },
  {
    step: "04",
    title: "Swap for $FROGX",
    desc: "Paste the contract address, set your slippage, and swap SOL for $FROGX. Welcome aboard! 🐸",
    emoji: "🔄",
  },
];

const HowToBuySection = () => {
  return (
    <section id="how-to-buy" className="py-28 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-secondary/8 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="cyber-line w-32 mx-auto mb-12" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-5xl font-black text-center text-secondary text-glow-green mb-16 tracking-wider"
        >
          HOW TO BUY 🛒
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 0 30px hsl(270 85% 62% / 0.15)" }}
              className="futuristic-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl">
                  {s.emoji}
                </div>
                <div>
                  <span className="text-[10px] font-display text-accent tracking-[0.3em] mb-1 block">
                    STEP {s.step}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;
