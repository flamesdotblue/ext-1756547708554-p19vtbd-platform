import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/70 via-black/30 to-black" />

      <header className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-sm bg-white/90" />
            <span className="text-lg font-semibold tracking-widest">GRIDFALL</span>
          </div>
          <nav className="hidden gap-8 md:flex text-sm text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#footage" className="hover:text-white transition-colors">Footage</a>
            <a href="#newsletter" className="hover:text-white transition-colors">Newsletter</a>
          </nav>
          <a href="#buy" className="rounded-md bg-white/90 px-4 py-2 text-sm font-medium text-black hover:bg-white transition-colors">Wishlist</a>
        </div>
      </header>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-start justify-center px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-5xl font-extrabold tracking-tight sm:text-6xl"
        >
          Command the last squads on collapsing cityscapes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-white/80"
        >
          Gridfall is a dystopian, turn-based tactics experience. Shape the battlefield as the urban grid fractures beneath your feet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a href="#footage" className="rounded-md bg-white px-6 py-3 text-black font-semibold hover:bg-white/90 transition-colors">Watch Footage</a>
          <a href="#features" className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors">Explore Features</a>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
