export default function WhyChooseUs() {
  const features = [
    { icon: "⭐", title: "Premium Quality", desc: "We use top-grade fabrics and materials for all products." },
    { icon: "🚚", title: "Fast Shipping", desc: "Quick dispatch and reliable delivery across India." },
    { icon: "🏭", title: "Own Manufacturing", desc: "Direct factory pricing with strict quality control." },
    { icon: "💰", title: "Best Wholesale Prices", desc: "Guaranteed best rates for all bulk orders." },
    { icon: "📦", title: "Bulk Ready Stock", desc: "Always in stock — ready to supply in any quantity." },
    { icon: "📞", title: "Instant Support", desc: "Dedicated team available via call or WhatsApp." },
  ];

  return (
    <section className="py-20 bg-white text-center px-6" id="why-choose-us">
      <h2 className="text-4xl font-extrabold text-pink-700 mb-10">Why Choose Us?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="p-8 bg-pink-50 rounded-2xl shadow-md border border-pink-200 hover:shadow-xl hover:-translate-y-2 transition-all"
          >
            <div className="text-5xl">{item.icon}</div>
            <h3 className="text-2xl font-bold text-pink-700 mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}