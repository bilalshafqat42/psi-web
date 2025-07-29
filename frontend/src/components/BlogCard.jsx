import React from "react";
import { CalendarDays, UserCircle2 } from "lucide-react";

const BlogCard = ({ blog }) => {
  return (
    <div
      key={blog.blogId}
      className="h-full flex flex-col bg-white border border-[#e6e6e6] rounded-xl overflow-hidden hover:shadow-lg transition-all"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-56 object-cover"
        />

        {/* Category */}
        <span className="absolute top-3 left-3 bg-[#faa300] text-white text-xs font-semibold px-2 py-1 rounded">
          {blog.category}
        </span>

        {/* Like button */}
        {/* <button
          onClick={() => console.log(`Liked blog ${blog.blogId}`)}
          className="absolute top-3 right-3 bg-[#01062d] p-1 rounded-full shadow hover:bg-red-100 transition"
        >
          <Heart className="text-[#faa300] w-4 h-4" />
        </button> */}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title */}
        <h2 className="text-[#01062d] text-base font-semibold mb-2 uppercase">
          {blog.title}
        </h2>

        {/* Meta info */}
        <div className="flex items-center text-[#7e7b7b] text-sm mb-4 font-medium gap-4">
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4 text-[#faa300]" />
            {blog.date}
          </div>
          <div className="flex items-center gap-1">
            {blog.authorImage ? (
              <img
                src={blog.authorImage}
                alt={blog.author}
                className="w-5 h-5 rounded-full"
              />
            ) : (
              <UserCircle2 className="w-5 h-5 text-gray-400" />
            )}
            {blog.author}
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-sm text-[#333] mb-6 flex-grow">{blog.excerpt}</p>

        {/* Read More */}
        <div className="flex justify-start">
          <a
            href={blog.readMoreLink}
            className="rounded-full text-sm text-[#faa300] bg-white border border-[#faa300] hover:bg-[#faa300] hover:text-white px-5 py-2"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
