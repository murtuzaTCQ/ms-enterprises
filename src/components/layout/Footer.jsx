export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6">

        {/* Brand */}
        <div>
          <img src="https://res.cloudinary.com/dsfsuecxf/image/upload/v1768542237/logo_qldg6v.png" className="h-24 mb-4" />
          <p className="text-gray-400">
            Your trusted wholesale fashion partner for women’s apparel.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-pink-300">Home</a></li>
            <li><a href="#products" className="hover:text-pink-300">Products</a></li>
            <li><a href="#contact" className="hover:text-pink-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>📞 +91 9179978818</li>
            <li>📧 murtuzashaikh2211@gmail.com</li>
            <li>📍 India</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-300">Instagram</a></li>
            <li><a href="#" className="hover:text-pink-300">Facebook</a></li>
            <li><a href="#" className="hover:text-pink-300">WhatsApp</a></li>
          </ul>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} MS Enterprises. All Rights Reserved.
      </p>
    </footer>
  );
}