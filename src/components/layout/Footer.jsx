export default function Footer() {
  return (
    <footer
      className="bg-gray-900 text-gray-300 py-16 mt-20"
      aria-label="Footer section for MS Enterprises wholesale fashion"
    >
      {/* Hidden SEO Content */}
      <div className="sr-only">
        MS Enterprises is a wholesale women’s clothing supplier offering palazzos, shrugs,
        designer blouses, ethnic wear and boutique apparel. Contact for bulk orders, retail supply,
        and nationwide delivery across India.
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
        
        {/* Brand */}
        <div aria-label="MS Enterprises brand information">
          <img
            src="https://res.cloudinary.com/dsfsuecxf/image/upload/v1768542237/logo_qldg6v.png"
            alt="MS Enterprises Logo"
            className="h-24 mb-4"
            loading="lazy"
          />
          <p className="text-gray-400">
            Your trusted wholesale fashion partner for women’s apparel.
          </p>
        </div>

        {/* Quick Links */}
        <div aria-label="Quick navigation links">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="hover:text-pink-300">Home</a>
            </li>
            <li>
              <a href="#products" className="hover:text-pink-300">Products</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div aria-label="Contact information">
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            <li aria-label="Phone number">📞 +91 9179978818</li>
            <li aria-label="Email address">📧 murtuzashaikh2211@gmail.com</li>
            <li aria-label="Country location">📍 India</li>
          </ul>
        </div>

        {/* Social Links */}
        <div aria-label="Social media links">
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-pink-300" aria-label="Instagram profile">Instagram</a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-300" aria-label="Facebook page">Facebook</a>
            </li>
            <li>
              <a
                href="https://wa.me/919179978818"
                target="_blank"
                className="hover:text-pink-300"
                aria-label="Contact on WhatsApp"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} MS Enterprises. All Rights Reserved.
      </p>
    </footer>
  );
}
