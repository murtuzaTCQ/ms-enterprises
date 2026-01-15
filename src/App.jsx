import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Slider from "./components/sections/Slider";
import Hero from "./components/sections/Hero";
import Products from "./components/sections/Products";
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import WhatsAppFloat from "./components/layout/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";
import ProductDetail from "./components/sections/ProductDetail";
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-100">
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Hero />
              <Products />
              <About />
              <WhyChooseUs />
              <Testimonials />
              <Contact />
            </>
          }
        />

        {/* PRODUCT DETAIL PAGE */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
