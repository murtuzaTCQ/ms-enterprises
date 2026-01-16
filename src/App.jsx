import { Routes, Route } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

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

      {/* Global SEO Defaults */}
      {/* <Helmet> */}
        <title>MS Enterprises | Electrical & Industrial Supplies</title>
        <meta
          name="description"
          content="MS Enterprises supplies high-quality electrical and industrial materials with reliable service and affordable pricing."
        />
        <meta
          name="keywords"
          content="electrical supplies, industrial materials, MS Enterprises, hardware store, cable suppliers"
        />
      {/* </Helmet> */}

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              {/* <Helmet> */}
                <title>Home | MS Enterprises</title>
                <meta
                  name="description"
                  content="Welcome to MS Enterprises — Your trusted source for electrical and industrial supplies."
                />
              {/* </Helmet> */}

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
        <Route
          path="/product/:id"
          element={
            <>
              {/* {/* <Helmet> */}
                <title>Product Details | MS Enterprises</title>
                <meta
                  name="description"
                  content="Explore high-quality electrical products and industrial materials at MS Enterprises."
                />
              {/* </Helmet> */}

              <ProductDetail />
            </>
          }
        />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
