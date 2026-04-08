import { motion } from "framer-motion";

const stats = [
  { label: "Holders", value: "12,847", emoji: "👥" },
  { label: "24h Volume", value: "$4.2M", emoji: "📈" },
  { label: "Market Cap", value: "$18.5M", emoji: "💎" },
  { label: "Twitter Followers", value: "45.2K", emoji: "🐦" },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-5xl font-black text-center text-primary text-glow-purple mb-8"
        >
          JOIN THE SWAMP 🐸
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto"
        >
          The FROGX army is growing every day. Don't be the one who missed the launch.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-xl border border-border bg-card text-center"
            >
              <div className="text-2xl mb-2">{s.emoji}</div>
              <p className="font-display text-xl font-black text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground font-body">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-foreground text-background font-display text-sm font-bold hover:opacity-90 transition-opacity"
          >
            𝕏 FOLLOW ON X
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-primary bg-primary/10 text-primary font-display text-sm font-bold"
          >
            ✈️ JOIN TELEGRAM
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
