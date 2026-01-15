export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 text-center px-6 overflow-hidden"
    >
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/video/about-bg2.mp4"   
      />

      
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold text-pink-700 mb-4 drop-shadow-md">
          About Us
        </h2>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed drop-shadow">
          MS Enterprises is a trusted wholesale supplier of premium women's clothing.
          With years of experience in manufacturing and bulk apparel distribution,
          we deliver top-quality Palazzo, Shrugs, Blouses & Ethnic Wear across India.
        </p>

       
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
          {[
            { num: "10+", label: "Years Experience" },
            { num: "500+", label: "Retail Clients" },
            { num: "2000+", label: "Products Delivered" },
            { num: "24/7", label: "Support" },
          ].map((item, index) => (
            <div key={index} className="text-center">
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
