import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";
import { MoveRight } from "lucide-react";
import "swiper/css";

import states from "../db/states";

const StatesGrid = () => {
  const visibleSlides = 5;
  const duplicatedStates = [...states];

  // Ensure enough slides for looping
  while (duplicatedStates.length < visibleSlides * 2) {
    duplicatedStates.push(...states);
  }

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={16}
        loop={true}
        grabCursor={true}
        virtual
        modules={[Virtual]}
        className="w-full"
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.5 },
          1280: { slidesPerView: 5 },
        }}
      >
        {duplicatedStates.map((post, index) => (
          <SwiperSlide key={index} virtualIndex={index} className="shrink-0">
            <div className="relative rounded-xl overflow-hidden shadow-md group">
              <img
                loading="lazy"
                src={post.image}
                alt={post.name}
                className="w-full h-[360px] object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-4">
                <p className="text-xs uppercase font-semibold mb-1">
                  {post.category}
                </p>
                <h2 className="text-lg font-bold leading-tight mb-1 line-clamp-2">
                  {post.name}
                </h2>
                <div className="text-sm text-gray-300 flex justify-between items-center">
                  <span>Properties: {post.numberOfProperties}</span>
                  <span className="flex items-center gap-1 text-white transition-colors duration-300 group-hover:text-yellow-400">
                    Read more <MoveRight size={16} />
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
