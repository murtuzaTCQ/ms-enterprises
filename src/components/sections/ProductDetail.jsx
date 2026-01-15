import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // ⭐ New state for size selection
  const [selectedSize, setSelectedSize] = useState(null);

  const productData = {
    palazzo: {
      title: "Palazzo",
      price: "₹150 – ₹250",
      desc: "Premium Palazzo available in multiple colors and fabrics.",
      images: [
        "/images/palazzo.jpg",
        "/images/palazzo2.jpg",
        "/images/palazzo3.jpg",
      ],
    },
    shrugs: {
      title: "Shrugs",
      price: "₹200 – ₹350",
      desc: "Soft and stylish shrugs perfect for layering.",
      images: [
        "/images/shrug.jpg",
        "/images/shrug2.jpg",
        "/images/shrug3.jpg",
      ],
    },
    blouses: {
      title: "Blouses",
      price: "₹180 – ₹300",
      desc: "Designer blouses with premium stitching.",
      images: [
        "/images/blouse.jpg",
        "/images/blouse2.jpg",
        "/images/blouse3.jpg",
      ],
    },
    "ethnic-wear": {
      title: "Ethnic Wear",
      price: "₹220 – ₹400",
      desc: "Traditional ethnic wear in modern designs.",
      images: [
        "/images/lower.jpg",
        "/images/lower2.jpg",
        "/images/lower3.jpg",
      ],
    },
  };

  const item = productData[id];
  if (!item) return <div className="text-center py-40">Loading...</div>;

  // ⭐ Create WhatsApp Link dynamically with size
  const whatsappLink = `https://wa.me/919179978818?text=Hello! I want to order: ${item.title} (Size: ${
    selectedSize || "Not Selected"
  })`;

  return (
    <div className="pt-[230px] pb-24 animate-fadeIn">

      {/* 🔙 BACK BUTTON */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <Link
          to="/#products"
          className="text-pink-700 hover:text-pink-500 text-lg font-semibold"
        >
          ← Back to Products
        </Link>
      </div>

      {/* 🧭 BREADCRUMB */}
      <div className="max-w-6xl mx-auto px-6 text-gray-600 mb-4 text-sm">
        <Link to="/" className="hover:text-pink-600">Home</Link> /
        <Link to="/#products" className="hover:text-pink-600"> Products</Link> /
        <span className="text-pink-700 ml-1">{item.title}</span>
      </div>

      {/* ⭐ MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* 🎞 IMAGE CAROUSEL */}
        <div>
          <Swiper
            modules={[Navigation, Pagination, Thumbs]}
            navigation
            pagination={{ clickable: true }}
            thumbs={{ swiper: thumbsSwiper }}
            className="rounded-3xl shadow-xl overflow-hidden"
          >
            {item.images.map((src, i) => (
              <SwiperSlide key={i}>
                <img src={src} className="w-full h-[420px] object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 🔻 THUMBNAILS */}
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={3}
            spaceBetween={16}
            className="mt-4"
          >
            {item.images.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  className="w-full h-24 object-cover rounded-xl border"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 📦 PRODUCT DETAILS */}
        <div className="bg-white/70 backdrop-blur-xl border border-pink-200 p-10 rounded-3xl shadow-xl">

          {/* TITLE */}
          <h1 className="text-5xl font-extrabold text-pink-700 mb-4">
            {item.title}
          </h1>

          {/* PRICE */}
          <div className="flex items-center gap-3 mb-6">
            <p className="text-4xl font-bold text-pink-600">{item.price}</p>
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
              Limited Offer
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-lg mb-6">{item.desc}</p>

          {/* ⭐ SIZE SELECTION */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Select Size</h3>

            <div className="flex gap-4 flex-wrap">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-2 text-lg rounded-full border transition shadow-sm ${
                    selectedSize === size
                      ? "bg-pink-600 text-white border-pink-700"
                      : "bg-white border-gray-300 hover:bg-pink-50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* 🌟 HIGHLIGHTS */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Highlights</h3>
            <ul className="text-gray-700 space-y-2">
              <li>✔ Premium stitched quality</li>
              <li>✔ Soft & long-lasting fabric</li>
              <li>✔ Multiple colors available</li>
              <li>✔ Free-size comfort fit</li>
              <li>✔ Bulk orders available</li>
            </ul>
          </div>

          {/* 🟢 ORDER BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            className="block text-center bg-green-600 hover:bg-green-700 text-white text-xl font-semibold py-4 rounded-full shadow-lg transition"
          >
            WhatsApp to Order
          </a>
        </div>
      </div>

      {/* ❤️ RELATED PRODUCTS */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {Object.entries(productData).map(([key, p]) =>
            key !== id ? (
              <Link
                key={key}
                to={`/product/${key}`}
                className="bg-white/70 backdrop-blur-xl p-4 rounded-3xl shadow-lg hover:scale-105 transition"
              >
                <img
                  src={p.images[0]}
                  className="w-full h-52 object-cover rounded-2xl mb-4"
                />
                <h3 className="text-xl font-semibold text-pink-700">{p.title}</h3>
              </Link>
            ) : null
          )}
        </div>
      </div>

      {/* ⭐ CUSTOMER REVIEWS */}
      <div className="max-w-5xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Loved the fabric quality! Worth the price.",
            "Great fit and very comfortable.",
            "Amazing colors and fast delivery.",
            "Perfect for daily wear. Ordering again!",
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-md"
            >
              ⭐⭐⭐⭐⭐
              <p className="text-gray-700 mt-3">{review}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
