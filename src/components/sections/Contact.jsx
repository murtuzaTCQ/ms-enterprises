import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <h3 className="text-4xl font-bold text-center text-gray-800">Contact Us</h3>

      <p className="text-center text-gray-600 text-xl mt-3">📞 +91 9179978818</p>
      <p className="text-center text-gray-600 text-xl">📧 murtuzashaikh2211@gmail.com</p>

      <div className="text-center mt-8">
        <Button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-xl rounded-full shadow-lg transition-all">
          WhatsApp Order
        </Button>
      </div>
    </section>
  );
}