import React from "react";
import {
  BedDouble,
  Bath,
  Ruler,
  Heart,
  MapPin,
  UserCircle2,
} from "lucide-react";

import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { LiaPhoneAltSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";

const PropertyCard = ({ property }) => {
  return (
    <div className="h-full flex flex-col bg-white border border-[#e6e6e6] rounded-xl overflow-hidden hover:shadow-lg transition-all">
      <div className="relative">
        {/* Property Image */}
        <img
          src={property.propertyImage}
          alt={property.propertyName}
          className="w-full h-56 object-cover"
        />

        {/* For Sale Tag - Top Left */}
        <span className="absolute top-3 left-3 bg-[#faa300] text-white text-xs font-semibold px-2 py-1 rounded">
          For Sale
        </span>

        {/* Heart Icon - Top Right */}
        <button
          onClick={() => console.log("Liked!")}
          className="absolute top-3 right-3 bg-[#01062d] p-1 rounded-full shadow hover:bg-red-100 transition"
        >
          <Heart className="text-[#faa300] w-4 h-4" />
        </button>

        {/* Price Tag - Bottom Left */}
        <span className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white text-sm font-bold px-3 py-1 rounded">
          {property.propertyPrice}
        </span>
      </div>

      <div className="p-4">
        {/* Heading */}
        <h2 className="text-[#01062d] text-base font-semibold mb-1 uppercase">
          {property.propertyName}
        </h2>

        {/* Location */}
        <div className="flex items-center text-[#7e7b7b] text-sm mb-3 font-medium">
          <MapPin className="mr-1 text-[#faa300] w-4 h-4" />
          {property.propertyLocation}
        </div>

        {/* Bed | Bath | Size */}
        <div className="grid grid-cols-3 text-base font-semibold text-[#01062d] mb-4">
          <div className="flex items-center text-xs gap-2">
            <BedDouble className="text-[#faa300] w-4 h-4" />
            {property.propertyBed} Bed
          </div>
          <div className="flex items-center text-xs gap-2">
            <Bath className="text-[#faa300] w-4 h-4" />
            {property.propertyBath} Bath
          </div>
          <div className="flex items-center text-xs gap-2">
            <Ruler className="text-[#faa300] w-4 h-4" />
            {property.propertySize}
          </div>
        </div>

        {/* Buttons - React Icons here */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <a
            href={property.whatsappButton}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-1 bg-[#f6f6f6] border border-[#f6f6f6] text-[#01062d] font-medium px-2 py-1 rounded text-base h-[40px]"
          >
            <FaWhatsapp className="text-[#1B8755] w-4 h-4" />
            <span className="text-xs text-[#000]">Whatsapp</span>
          </a>
          <a
            href={property.callButton}
            className="flex justify-center items-center gap-1 bg-[#f6f6f6] border border-[#f6f6f6] text-[#01062d] font-medium px-2 py-1 rounded text-base  h-[40px]"
          >
            <LiaPhoneAltSolid className="text-[#faa300] w-4 h-4 -rotate-90" />
            <span className="text-xs">Call Us</span>
          </a>
          <a
            href={property.emailButton}
            className="flex justify-center items-center gap-1 bg-[#f6f6f6] border border-[#f6f6f6] text-[#01062d] font-medium px-2 py-1 rounded text-base  h-[40px]"
          >
            <TfiEmail className="text-[#EA4335] w-4 h-4" />
            <span className="text-xs">Email Us</span>
          </a>
        </div>

        {/* Divider */}
        <hr className="my-4 text-[#d2d2d2]" />

        {/* Agent Info + Details */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {property.agentImage ? (
              <img
                src={property.agentImage}
                alt={property.agentName}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <UserCircle2 className="w-10 h-10 text-gray-400" />
            )}
            <span className="text-sm font-medium">{property.agentName}</span>
          </div>
          <a
            href={property.propertyDetailsButton}
            className="rounded-full text-sm text-[#faa300] bg-white border border-[#faa300] hover:bg-[#faa300] hover:text-white px-5 py-2"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
