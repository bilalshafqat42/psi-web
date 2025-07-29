import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import BlogCard from "./BlogCard";
import blogs from "../db/blog";

const BlogSlider = () => {
  return (
    <section className="py-6 pl-4 pr-0 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#01062d] mb-8 text-left border-[#faa300] border-l-4 pl-4">
          LATEST BLOGS
        </h2>
        {/* Swiper */}
        <div className="relative px-0 md:pr-0">
          {/* Add pr-8 to allow half card on mobile */}
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: ".blog-swiper-button-next",
              prevEl: ".blog-swiper-button-prev",
            }}
            spaceBetween={20}
            slidesPerView={1.2}
            initialSlide={0}
            centeredSlides={false}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.blogId} className="h-full">
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation buttons - only show on md and up */}
          <button className="blog-swiper-button-prev hidden md:flex absolute top-1/2 -left-[60px] transform -translate-y-1/2 w-9 h-9 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition z-10 items-center justify-center">
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
          <button className="blog-swiper-button-next hidden md:flex absolute top-1/2 -right-[60px] transform -translate-y-1/2 w-9 h-9 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition z-10 items-center justify-center">
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

export default BlogSlider;
