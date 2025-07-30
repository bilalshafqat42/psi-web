import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import states from "../db/states";

const StatesGrid = () => {
  console.log("state", states);
  return (
    <section className="w-full py-16 bg-white">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={16}
        loop={true}
        grabCursor={true}
        className="w-full"
      >
        {states.map((state) => (
          <SwiperSlide key={state.id} className="max-w-[20%]">
            <div className="relative rounded-xl overflow-hidden shadow-md group">
              <img
                src={state.image}
                alt={state.name}
                className="w-full h-[360px] object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-4">
                <h2 className="text-lg font-bold leading-tight mb-1 line-clamp-2">
                  {state.name}
                </h2>
                <div className="text-sm text-gray-300 flex justify-between">
                  <span>Number Of Properties: {state.numberOfProperties}</span>
                  <span>
                    {state.date} | {state.readTime}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default StatesGrid;
