import { motion } from "framer-motion";

const tokenCards = [
  { label: "Total Supply", value: "1,000,000,000", icon: "💰", color: "primary" },
  { label: "Burned", value: "50%", icon: "🔥", color: "destructive" },
  { label: "Liquidity Pool", value: "40%", icon: "💧", color: "secondary" },
  { label: "Community", value: "10%", icon: "🤝", color: "primary" },
];

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-5xl font-black text-center text-secondary text-glow-green mb-16"
        >
          TOKENOMICS 📊
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tokenCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative p-6 rounded-2xl border border-border bg-card text-center ${
                card.color === "primary" ? "box-glow-purple" : card.color === "secondary" ? "box-glow-green" : ""
              }`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <p className="text-sm text-muted-foreground font-body mb-2">{card.label}</p>
              <p className={`font-display text-2xl font-black ${
                card.color === "primary" ? "text-primary" : card.color === "secondary" ? "text-secondary" : "text-destructive"
              }`}>
                {card.value}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-8 font-body"
        >
          🔒 Liquidity locked. Contract renounced. SAFU. 🐸
        </motion.p>
      </div>
    </section>
  );
};

export default TokenomicsSection;
