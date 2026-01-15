import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  const items = [
  {
    id: "palazzo",
    img: "/images/palazzo.jpg",   // Correct file exists
    title: "Palazzo",
    desc: "Premium comfort Palazzo in various designs.",
  },
  {
    id: "shrugs",
    img: "/images/shrug.jpg",     // Correct file exists
    title: "Shrugs",
    desc: "Elegant shrugs crafted for modern styling.",
  },
  {
    id: "blouses",
    img: "/images/blouse.jpg",    // Correct file exists
    title: "Blouses",
    desc: "Fashionable blouses with premium finishing.",
  },
  {
    id: "ethnic-wear",
    img: "/images/lower.jpg",     // Correct file exists
    title: "Ethnic Wear",
    desc: "Designer ethnic lower wear for all occasions.",
  },
];


  const openDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-20">
      <h3 className="text-4xl font-extrabold text-center text-gray-800">
        Browse Our Categories
      </h3>

      <p className="text-center text-gray-500 mt-2 text-lg mb-10">
        High-quality wholesale fashion at the best prices.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((item, index) => (
          <Card
            key={index}
            className="rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 bg-white/70 backdrop-blur-xl border border-white/40 cursor-pointer"
            onClick={() => openDetail(item.id)}
          >
            <CardContent className="p-0">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              />

              <div className="p-6 text-center">
                <h4 className="text-2xl font-bold text-gray-800">{item.title}</h4>
                <p className="text-gray-500 mt-2">{item.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
