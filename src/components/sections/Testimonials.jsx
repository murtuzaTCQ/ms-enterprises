import { useState } from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ayesha Khan",
      review:
        "Amazing quality! The palazzos and shrugs are exactly what my boutique needed. Fast shipping and great service.",
      location: "Mumbai",
    },
    {
      name: "Ritu Sharma",
      review:
        "MS Enterprises always delivers perfectly. Reliable wholesale supplier with premium fabric quality.",
      location: "Delhi",
    },
    {
      name: "Neha Boutique",
      review:
        "Trendy designs and best pricing in the market. My customers absolutely loved the blouses!",
      location: "Hyderabad",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section
      id="testimonials"
      className="relative py-20 text-center px-6 overflow-hidden"
    >
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/video/testimonials-bg.mp4"  
      />

      
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold text-pink-700 mb-10 drop-shadow-md">
          What Clients Say
        </h2>

        
        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl border border-pink-200 shadow-xl rounded-3xl p-10 relative">
          <p className="text-gray-700 text-lg leading-relaxed italic drop-shadow">
            “{reviews[current].review}”
          </p>

          <h3 className="mt-6 text-2xl font-bold text-pink-700 drop-shadow">
            — {reviews[current].name}
          </h3>
          <p className="text-gray-600">{reviews[current].location}</p>

          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 backdrop-blur-md p-3 rounded-full shadow hover:bg-white transition"
          >
            ◀
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 backdrop-blur-md p-3 rounded-full shadow hover:bg-white transition"
          >
            ▶
          </button>
        </div>

        
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-pink-600 w-6" : "bg-pink-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
