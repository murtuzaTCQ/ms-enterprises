import { useState, useEffect } from "react";

export default function Slider() {
  const slides = [
    {
      img: "/images/palazzo.jpg",
      title: "Premium Palazzo Collection",
      subtitle: "Soft, comfortable & elegant designs for all retailers.",
      alt: "Premium Palazzo Collection wholesale supplier – MS Enterprises"
    },
    {
      img: "/images/shrug.jpg",
      title: "Stylish Shrugs",
      subtitle: "Trendy layering options perfect for boutiques.",
      alt: "Stylish Shrugs wholesale manufacturer – MS Enterprises"
    },
    {
      img: "/images/blouse.jpg",
      title: "Designer Blouses",
      subtitle: "Premium stitching & high-quality workmanship.",
      alt: "Designer Blouses wholesale supplier – MS Enterprises"
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full h-[470px] max-w-7xl mx-auto overflow-hidden mt-[110px] rounded-[30px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-white/50 backdrop-blur-xl"
      aria-label="Product collection showcase slider"
    >

      {/* SEO Hidden Text for Google Only */}
      <div className="sr-only">
        MS Enterprises wholesale clothing slider featuring palazzo collections, stylish shrugs,
        designer blouses, and premium women's wear collections for boutiques and retailers.
      </div>

      {/* SLIDES */}
      {slides.map((slide, i) => (
        <figure
          key={i}
          className={`absolute inset-0 transition-all duration-[900ms] ease-in-out ${
            index === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* IMAGE */}
          <img
            src={slide.img}
            alt={slide.alt}
            className="w-full h-full object-cover rounded-[30px]"
            loading="lazy"  // SEO + performance improvement
          />

          {/* ROSE-PINK OVERLAY */}
          <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-pink-200/60 via-rose-100/40 to-white/10"></div>

          {/* TEXT */}
          <figcaption className="absolute left-10 top-1/2 -translate-y-1/2 max-w-xl">
            <h2 className="text-5xl font-extrabold text-gray-900 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] leading-tight">
              {slide.title}
            </h2>

            <p className="text-lg text-gray-800 mt-3 font-medium backdrop-blur-sm bg-white/40 px-4 py-2 rounded-full shadow">
              {slide.subtitle}
            </p>
          </figcaption>
        </figure>
      ))}

      {/* DOTS */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === i ? "bg-pink-600 w-8" : "bg-pink-300 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
