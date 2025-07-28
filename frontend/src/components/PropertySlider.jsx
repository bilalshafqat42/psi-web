import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import properties from "../db/properties";
import PropertyCard from "./PropertyCard";

const PropertySlider = () => {
  const [type, setType] = useState("rent");

  return (
    <section className="py-6 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#01062d] mb-8 text-left border-[#faa300] border-l-4 pl-4">
          LATEST PROPERTIES
        </h2>

        {/* Toggle Rent/Buy */}
        <div className="relative flex bg-gray-200 rounded w-80 h-10 cursor-pointer mb-8">
          <div
            className={`absolute top-0 h-full w-1/2 bg-[#faa300] rounded transition-all duration-300 ${
              type === "buy" ? "left-1/2" : "left-0"
            }`}
          ></div>
          <div
            className="flex-1 flex items-center justify-center z-10 text-sm font-medium"
            onClick={() => setType("rent")}
          >
            <span className={type === "rent" ? "text-white" : "text-[#01062d]"}>
              FOR SALE
            </span>
          </div>
          <div
            className="flex-1 flex items-center justify-center z-10 text-sm font-medium"
            onClick={() => setType("buy")}
          >
            <span className={type === "buy" ? "text-white" : "text-[#01062d]"}>
              FOR RENT
            </span>
          </div>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 }, // Show 3 full + 1 half
            }}
            className="h-full"
          >
            {properties.map((property, index) => (
              <SwiperSlide key={index} className="h-full">
                <PropertyCard property={property} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="custom-swiper-button-prev absolute top-1/2 -left-[60px] transform -translate-y-1/2 w-9 h-9 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition z-10 flex items-center justify-center">
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

          <button className="custom-swiper-button-next absolute top-1/2 -right-[60px] transform -translate-y-1/2 w-9 h-9 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition z-10 flex items-center justify-center">
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
