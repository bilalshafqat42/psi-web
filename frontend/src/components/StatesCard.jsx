// components/StateCard.jsx

import React from "react";

const StateCard = ({ name, numberOfProperties, image }) => {
  return (
    <div className="min-w-[280px] sm:min-w-[320px] max-w-sm bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <img src={image} alt={name} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{numberOfProperties} Properties</p>
      </div>
    </div>
  );
};

export default StateCard;
