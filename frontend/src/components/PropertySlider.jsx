import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import properties from "../db/properties";
import PropertyCard from "./PropertyCard";

const PropertySlider = () => {
  return (
    <section className="py-6 pl-4 pr-0relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#01062d] mb-8 text-left border-[#faa300] border-l-4 pl-4">
          LATEST PROPERTIES
        </h2>

        {/* Swiper */}
        <div className="relative pl-0 pr-0 md:pr-0">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={false}
            initialSlide={0}
            breakpoints={{
              640: { slidesPerView: 1.2 }, // Show 1 + a bit on mobile
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
            }}
            className="h-full"
          >
            {properties.map((property, index) => (
              <SwiperSlide key={index} className="h-full">
                <PropertyCard property={property} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows — only on md+ */}
          <button className="custom-swiper-button-prev hidden md:flex absolute top-1/2 -left-[60px] transform -translate-y-1/2 w-9 h-9 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition z-10 items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="custom-swiper-button-next hidden md:flex absolute top-1/2 -right-[60px] transform -translate-y-1/2 w-9 h-9 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition z-10 items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertySlider;
