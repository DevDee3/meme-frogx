import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full mx-auto w-1/2 h-1/2 top-1/4" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-black text-primary text-glow-purple mb-8">
            WTF IS $FROGX? 🐸
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            <p>
              One day, a <span className="text-secondary font-bold">based frog</span> woke up in the Solana swamp
              with nothing but a pair of sunglasses, a gold chain, and a{" "}
              <span className="text-primary font-bold">dream of making everyone rich</span>.
            </p>
            <p>
              No VC funding. No team tokens. No BS.{" "}
              <span className="text-foreground font-semibold">
                Just pure, unfiltered degen energy.
              </span>
            </p>
            <p className="text-2xl">
              🐸 + ☀️ + 🚀 = <span className="text-secondary font-bold text-glow-green">$FROGX</span>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12 inline-block px-6 py-3 rounded-xl border border-primary/30 bg-primary/10"
          >
            <p className="font-display text-sm text-primary">
              "I didn't choose the degen life. The degen life chose me." — FROGX
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
