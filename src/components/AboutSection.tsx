import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4 relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/8 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Decorative cyber line */}
        <div className="cyber-line w-32 mx-auto mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-5xl font-black text-primary text-glow-purple mb-10 tracking-wider">
            WHAT IS FROGX? 🐸
          </h2>

          <div className="futuristic-card p-8 sm:p-12 mb-8">
            <div className="space-y-6 text-lg text-muted-foreground font-body max-w-3xl mx-auto">
              <p>
                One day, a <span className="text-secondary font-bold">based frog</span> woke up in the Solana swamp
                with nothing but a pair of sunglasses, a gold chain, and a{" "}
                <span className="text-primary font-bold">dream of making everyone rich</span>.
              </p>
              <p>
                {" "}
                <span className="text-foreground font-semibold">
                  Just pure, unfiltered swamp energy.
                </span>
              </p>
              <p className="text-2xl pt-2">
                🐸 + 🚀 = <span className="text-secondary font-bold text-glow-green">$FGX</span>
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-6 py-3 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm"
          >
            <p className="font-display text-xs sm:text-sm text-primary tracking-wider">
              "I didn't choose the degen life. The degen life chose me." — FROGX
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
