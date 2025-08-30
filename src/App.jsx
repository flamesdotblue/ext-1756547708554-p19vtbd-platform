import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import FootageSection from './components/FootageSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <FeaturesSection />
      <FootageSection />
      <Footer />
    </div>
  );
}

export default App;
