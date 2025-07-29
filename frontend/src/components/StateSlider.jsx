import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import StateCard from "./StatesCard";
import states from "../db/states";

const StateSlider = () => {
  return (
    <div className="py-4 px-2">
      <Swiper
        spaceBetween={16}
        loop={true}
        grabCursor={true}
        slidesPerView={1.5}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
      >
        {states.map((state) => (
          <SwiperSlide key={state.id}>
            <StateCard
              name={state.name}
              numberOfProperties={state.numberOfProperties}
              image={state.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StateSlider;
