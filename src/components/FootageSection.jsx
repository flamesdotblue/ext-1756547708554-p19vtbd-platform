import { motion } from 'framer-motion';

function ResponsiveVideo({ src, title }) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl">
      <div className="relative pt-[56.25%]">{/* 16:9 */}
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function FootageSection() {
  return (
    <section id="footage" className="relative w-full bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          In-game battle footage
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-3 max-w-2xl text-white/70"
        >
          Watch squads navigate collapsing tiles, trigger chain reactions, and seize high-ground advantage.
        </motion.p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <ResponsiveVideo
            src="https://www.youtube.com/embed/0bKkGeC9b4E?rel=0&modestbranding=1"
            title="Gridfall Gameplay Montage"
          />
          <ResponsiveVideo
            src="https://www.youtube.com/embed/8XQWfYH5PGw?rel=0&modestbranding=1"
            title="Urban Collapse Systems Showcase"
          />
        </div>
      </div>
    </section>
  );
}

export default FootageSection;
