import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import PropertySlider from "../components/PropertySlider";
import BlogCard from "../components/BlogCard";
import dummyBlogs from "../db/blog";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <SearchForm /> */}
      <PropertySlider />
      <section className="py-12 px-6 max-w-7xl mx-auto">
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
