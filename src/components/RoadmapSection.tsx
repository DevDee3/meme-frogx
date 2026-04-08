import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase 1",
    title: "Launch & Memes 🐸",
    items: ["Deploy on Pump.fun", "Build meme army", "1,000 holders", "CoinGecko listing"],
    status: "active",
  },
  {
    phase: "Phase 2",
    title: "Viral Takeover 🔥",
    items: ["Trending on Pump.fun", "10,000 holders", "CEX listings", "Partnerships"],
    status: "upcoming",
  },
  {
    phase: "Phase 3",
    title: "Trending on X 📱",
    items: ["Twitter raids", "Influencer campaigns", "50K holders", "Merch store"],
    status: "upcoming",
  },
  {
    phase: "Phase 4",
    title: "Moon Mission 🌙",
    items: ["$100M market cap", "Major CEX listing", "FROGX DAO", "World domination"],
    status: "upcoming",
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-5xl font-black text-center text-primary text-glow-purple mb-16"
        >
          ROADMAP 🗺️
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className={`p-6 rounded-2xl border bg-card ${
                phase.status === "active"
                  ? "border-primary box-glow-purple"
                  : "border-border"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-display font-bold ${
                  phase.status === "active"
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {phase.phase}
                </span>
                {phase.status === "active" && (
                  <span className="flex items-center gap-1 text-xs text-secondary">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    LIVE
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <span className="text-secondary">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
