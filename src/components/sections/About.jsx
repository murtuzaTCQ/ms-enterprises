export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 text-center px-6 overflow-hidden"
      aria-label="About MS Enterprises Wholesale Women’s Fashion"
    >

      {/* SEO Hidden Text for Google */}
      <div className="sr-only">
        MS Enterprises is India’s trusted wholesale supplier of women’s clothing including palazzos,
        shrugs, designer blouses, ethnic wear, and boutique apparel. With over a decade of experience,
        MS Enterprises provides high-quality manufacturing, bulk order support, and reliable delivery
        for retailers, resellers, and boutique owners across India.
      </div>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/video/about-bg2.mp4"
        aria-label="About section background fashion video"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-pink-700 mb-4 drop-shadow-md">
          About Us
        </h2>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed drop-shadow">
          MS Enterprises is a trusted wholesale supplier of premium women's clothing.
          With over a decade of expertise in manufacturing and bulk apparel distribution,
          we deliver top-quality Palazzos, Shrugs, Blouses & Ethnic Wear to retailers across India.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
          {[
            { num: "10+", label: "Years Experience" },
            { num: "500+", label: "Retail Clients" },
            { num: "2000+", label: "Products Delivered" },
            { num: "24/7", label: "Support" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center"
              aria-label={`${item.num} ${item.label}`}
            >
              <h3 className="text-4xl font-bold text-pink-700 drop-shadow">
                {item.num}
              </h3>
              <p className="text-gray-700 mt-2 font-medium drop-shadow">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
