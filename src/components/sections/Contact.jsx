import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-20"
      aria-label="Contact MS Enterprises wholesale fashion supplier"
    >
      {/* Hidden SEO text */}
      <div className="sr-only">
        Contact MS Enterprises for wholesale women’s clothing orders including palazzos, shrugs,
        blouses and ethnic wear. Reach us via phone, email or WhatsApp for bulk order support and
        pan-India delivery.
      </div>

      <h3 className="text-4xl font-bold text-center text-gray-800">Contact Us</h3>

      {/* SEO + Accessibility: labeled contact details */}
      <p className="text-center text-gray-600 text-xl mt-3" aria-label="Phone number">
        📞 +91 9179978818
      </p>

      <p className="text-center text-gray-600 text-xl" aria-label="Email address">
        📧 murtuzashaikh2211@gmail.com
      </p>

      <div className="text-center mt-8">
        <Button
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-xl rounded-full shadow-lg transition-all"
          aria-label="Order on WhatsApp"
          onClick={() =>
            window.open("https://wa.me/919179978818?text=Hello%2C%20I%20want%20to%20place%20a%20wholesale%20order.", "_blank")
          }
        >
          WhatsApp Order
        </Button>
      </div>
    </section>
  );
}
