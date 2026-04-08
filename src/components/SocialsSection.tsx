import { motion } from "framer-motion";
import { Send } from "lucide-react";

const socials = [
  { name: "Twitter / X", icon: <span className="text-xl">𝕏</span>, href: "https://x.com", color: "foreground" },
  { name: "Telegram", icon: <Send size={20} />, href: "https://t.me", color: "primary" },
  { name: "DexScreener", icon: <span className="text-xl">📊</span>, href: "https://dexscreener.com", color: "secondary" },
];

const SocialsSection = () => {
  return (
    <section id="community" className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-5xl font-black text-primary text-glow-purple mb-12"
        >
          SOCIALS 🔗
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className={`flex items-center justify-center gap-3 px-8 py-5 rounded-2xl border font-display text-sm font-bold transition-colors ${
                s.color === "primary"
                  ? "border-primary bg-primary/10 text-primary box-glow-purple"
                  : s.color === "secondary"
                  ? "border-secondary bg-secondary/10 text-secondary box-glow-green"
                  : "border-border bg-card text-foreground hover:border-foreground"
              }`}
            >
              <span className="text-xl">{s.icon}</span>
              {s.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
