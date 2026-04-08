import { motion } from "framer-motion";
import { Send } from "lucide-react";

const socials = [
  { name: "Twitter / X", icon: <span className="text-xl">𝕏</span>, href: "https://x.com", color: "foreground" },
  { name: "Telegram", icon: <Send size={20} />, href: "https://t.me", color: "primary" },
  { name: "DexScreener", icon: <span className="text-xl">📊</span>, href: "https://dexscreener.com", color: "secondary" },
];

const SocialsSection = () => {
  return (
    <section id="community" className="py-28 px-4 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[250px] bg-accent/8 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="cyber-line w-32 mx-auto mb-12" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-5xl font-black text-primary text-glow-purple mb-14 tracking-wider"
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
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: s.color === "primary"
                  ? "0 0 30px hsl(270 85% 62% / 0.3)"
                  : s.color === "secondary"
                  ? "0 0 30px hsl(160 90% 45% / 0.3)"
                  : "0 0 30px hsl(0 0% 100% / 0.1)"
              }}
              className={`futuristic-card flex items-center justify-center gap-3 px-8 py-5 font-display text-sm font-bold transition-all duration-300 ${
                s.color === "primary"
                  ? "text-primary"
                  : s.color === "secondary"
                  ? "text-secondary"
                  : "text-foreground"
              }`}
            >
              <span>{s.icon}</span>
              {s.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
