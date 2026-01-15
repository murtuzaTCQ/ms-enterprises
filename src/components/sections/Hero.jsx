export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/video/bg-fashion.mp4"  
      />

      
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 to-rose-100/40 backdrop-blur-[1px]"></div>

     
      <div className="relative z-10">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 drop-shadow-xl tracking-tight">
          Redefining Women’s Wholesale Fashion
        </h1>

        <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto drop-shadow-lg">
          Premium Palazzo, Shrugs, Blouses & Ethnic Wear — Designed for Modern Retailers.
        </p>

        <button className="mt-8 bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 text-xl rounded-full shadow-xl transition-all">
          Explore Products
        </button>
      </div>

      
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white"></div>
    </section>
  );
}
