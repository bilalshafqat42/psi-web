import SearchForm from "./SearchForm";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: "url('/images/main-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {/* Containerized Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-between">
        {/* Centered Text Content */}
        <div className="flex-1 flex items-center justify-center text-center">
          <div>
            <h1 className="text-white text-5xl md:text-4xl font-extrabold leading-tight mb-4">
              Discover Modern Living in the Heart of the City
            </h1>
            <p className="text-white text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
              Exclusive properties, flexible payment plans, and investment-ready
              real estate options built for your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition">
                Explore Properties
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-700 font-semibold px-6 py-3 rounded-full transition">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Search Form at bottom with 100px margin */}
        <div className="mb-[100px]">
          <SearchForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
