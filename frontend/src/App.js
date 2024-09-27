import { useEffect, useState } from "react";
import Header from "./sections/Header.js";
import Hero from "./sections/Hero.js";
import Features from "./sections/Features.js";
import Pricing from "./sections/Pricing.js";
import Faq from "./sections/Faq.js";
import Testimonials from "./sections/Testimonials.js";
import Download from "./sections/Download.js";
import Footer from "./sections/Footer.js";
import HypnoticLoader from "./components/HypnoticLoader.js"; // Adjust the import based on your folder structure

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Loader will show for 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <main className="overflow-hidden">
      {loading ? (
        <HypnoticLoader 
          loadingText="Welcome to Vizora, where your data comes to life!" 
          // glitch={true} // Set to true if you want the glitch effect
        />
      ) : (
        <>
          <Header />
          <Hero />
          <Features />
          <Pricing />
          <Faq />
          <Testimonials />
          <Download />
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
