import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandStatement from "./components/BrandStatement";
import Products from "./components/Products";
import ScentPersonality from "./components/ScentPersonality";
import Lifestyle from "./components/Lifestyle";
import WhyNoSaint from "./components/WhyNoSaint";
import Testimonials from "./components/Testimonials";
import SocialGrid from "./components/SocialGrid";
import EmailCTA from "./components/EmailCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-ns-black text-ns-off-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <Products />
        <ScentPersonality />
        <Lifestyle />
        <WhyNoSaint />
        <Testimonials />
        <SocialGrid />
        <EmailCTA />
      </main>
      <Footer />
    </div>
  );
}
