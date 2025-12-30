import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ServicesCarousel from "./ServicesCarousel";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ProductsPage from "./ProductsPage";
import FooterPage from "./Footer";

/* ---------- HOME PAGE ---------- */
function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 bg-[radial-gradient(circle_at_top,_rgba(8,145,178,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.2),_transparent_55%)]">
      <Navbar />
      <HeroSection />
      <ServicesCarousel />
      <AboutSection />
      <ContactSection />
      <FooterPage />
    </div>
  );
}

/* ---------- APP ROOT ---------- */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
