import { motion } from 'framer-motion';
import { Grid, Shield, Zap, Map } from 'lucide-react';

const features = [
  {
    icon: Grid,
    title: 'Reactive Grid',
    desc: 'Tiles fracture, collapse, and reform under stress. Positioning is a weapon.',
  },
  {
    icon: Shield,
    title: 'Squad Synergy',
    desc: 'Combine unit abilities for cascading control effects and tactical counters.',
  },
  {
    icon: Zap,
    title: 'Dynamic Hazards',
    desc: 'Power surges, drone sweeps, and structural failures shift objectives mid-fight.',
  },
  {
    icon: Map,
    title: 'Urban Arenas',
    desc: 'Fight across neon rooftops, transit hubs, and quarantined districts.',
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative w-full bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Precision tactics on unstable ground
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-3 max-w-2xl text-white/70"
        >
          Every move reshapes the board. Exploit collapse chains, force enemy missteps, and hold the line.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-sm hover:border-white/20"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
