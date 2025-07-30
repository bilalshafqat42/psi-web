import React from "react";

const StatesCard = ({ image, category, title, author, date, readTime }) => {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-5">
        <p className="text-xs uppercase font-semibold text-gray-500 mb-2">
          {category}
        </p>
        <h2 className="text-lg font-bold leading-tight text-gray-900 mb-3 line-clamp-2">
          {title}
        </h2>
        <div className="text-sm text-gray-600 flex items-center justify-between">
          <span>{author}</span>
          <span>
            {date} | {readTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatesCard;
