import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PropertySlider from "../components/PropertySlider";
import BlogCard from "../components/BlogCard";
import dummyBlogs from "../db/blog";

import { Lightbulb, Workflow, Headphones, CheckCircle } from "lucide-react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* about us section  */}
      <section className="bg-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-600 mb-6">
              We are a passionate team dedicated to delivering high-quality
              solutions to our clients. Our goal is to innovate, inspire, and
              impact through every project we take on.
            </p>
            <p className="text-gray-600 mb-6">
              We are a passionate team dedicated to delivering high-quality
              solutions to our clients. Our goal is to innovate, inspire, and
              impact through every project we take on.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition">
              Learn More
            </button>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-8">
            {/* Item 1 */}
            <div className="p-6 border border-[#FAA300] rounded-xl flex flex-col gap-y-3 bg-[#FAA300]">
              <Lightbulb className="w-8 h-8 text-white" />
              <h4 className="font-semibold text-white">Innovative Ideas</h4>
              <p className="text-sm text-white">
                Creative solutions tailored to your business goals.
              </p>
            </div>

            {/* Item 2 */}
            <div className="p-6 border rounded-xl flex flex-col gap-y-3">
              <Workflow className="w-8 h-8 text-yellow-500" />
              <h4 className="font-semibold text-gray-800">Seamless Workflow</h4>
              <p className="text-sm text-gray-500">
                Efficient processes that save time and cost.
              </p>
            </div>

            {/* Item 3 */}
            <div className="p-6 border rounded-xl flex flex-col gap-y-3">
              <Headphones className="w-8 h-8 text-yellow-500" />
              <h4 className="font-semibold text-gray-800">Real-time Support</h4>
              <p className="text-sm text-gray-500">
                We're always here to support your needs.
              </p>
            </div>

            {/* Item 4 */}
            <div className="p-6 border rounded-xl flex flex-col gap-y-3">
              <CheckCircle className="w-8 h-8 text-yellow-500" />
              <h4 className="font-semibold text-gray-800">Trusted Delivery</h4>
              <p className="text-sm text-gray-500">
                On-time and dependable project completion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PropertySlider />
      <section className="py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-[#01062d]">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyBlogs.map((blog) => (
            <BlogCard key={blog.blogId} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
