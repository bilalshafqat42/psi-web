const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/main-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {/* CONTAINERIZED CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-40">
        <div className="px-6 py-20 text-center">
          {/* Heading */}
          <h1 className="text-white text-5xl md:text-4xl font-extrabold leading-tight mb-4">
            Discover Modern Living in the Heart of the City
          </h1>

          {/* Subheading */}
          <p className="text-white text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Exclusive properties, flexible payment plans, and investment-ready
            real estate options built for your lifestyle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition">
              Explore Properties
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-700 font-semibold px-6 py-3 rounded-full transition">
              Book a Consultation
            </button>
          </div>
        </div>
        {/* search Form Section */}
      </div>
    </section>
  );
};

export default HeroSection;
