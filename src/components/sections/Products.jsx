import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  const items = [
    {
      id: "palazzo",
      img: "https://res.cloudinary.com/dsfsuecxf/image/upload/v1768542238/palazzo2_t1tz7u.jpg",
      title: "Palazzo",
      desc: "Premium comfort Palazzo in various designs.",
      alt: "Wholesale Palazzo collection – premium women’s palazzo pants supplier"
    },
    {
      id: "shrugs",
      img: "https://res.cloudinary.com/dsfsuecxf/image/upload/v1768542238/shrug_lmxc5b.jpg",
      title: "Shrugs",
      desc: "Elegant shrugs crafted for modern styling.",
      alt: "Wholesale shrugs for boutiques – women’s layering shrugs supplier"
    },
    {
      id: "blouses",
      img: "https://res.cloudinary.com/dsfsuecxf/image/upload/v1768542237/blouse_vhwhff.jpg",
      title: "Blouses",
      desc: "Fashionable blouses with premium finishing.",
      alt: "Designer blouses wholesale – ethnic blouses manufacturer"
    },
    {
      id: "ethnic-wear",
      img: "https://res.cloudinary.com/dsfsuecxf/image/upload/v1768542237/lower_bbhm2d.jpg",
      title: "Ethnic Wear",
      desc: "Designer ethnic lower wear for all occasions.",
      alt: "Wholesale ethnic wear – women’s ethnic bottoms manufacturer"
    },
  ];

  const openDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Hidden SEO Text for Google Only */}
      <div className="sr-only">
        MS Enterprises offers wholesale women’s fashion categories including palazzos, shrugs, 
        blouses, and ethnic wear. Premium-quality clothing for boutiques, retailers, and distributors.
      </div>

      <h3 className="text-4xl font-extrabold text-center text-gray-800">
        Browse Our Categories
      </h3>

      <p className="text-center text-gray-500 mt-2 text-lg mb-10">
        High-quality wholesale fashion at the best prices.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((item, index) => (
          <article
            key={index}
            aria-label={`Wholesale ${item.title} category`}
          >
            <Card
              className="rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 bg-white/70 backdrop-blur-xl border border-white/40 cursor-pointer"
              onClick={() => openDetail(item.id)}
            >
              <CardContent className="p-0">

                <figure>
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </figure>

                <div className="p-6 text-center">
                  <h4 className="text-2xl font-bold text-gray-800">{item.title}</h4>
                  <p className="text-gray-500 mt-2">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
}
