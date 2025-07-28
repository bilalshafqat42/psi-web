import React from "react";
import {
  BedDouble,
  Bath,
  Ruler,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  UserCircle2,
} from "lucide-react";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white border border-[#d2d2d2] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
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
        <h2 className="text-[#01062d] text-lg font-semibold mb-1 uppercase">
          {property.propertyName}
        </h2>

        {/* Location */}
        <div className="flex items-center text-[#7e7b7b] text-base mb-3 font-medium">
          <MapPin className="mr-1 text-[#faa300] w-4 h-4" />
          {property.propertyLocation}
        </div>

        {/* Bed | Bath | Size */}
        <div className="grid grid-cols-3 text-base font-semibold text-[#01062d] mb-4">
          <div className="flex items-center gap-2">
            <BedDouble className="text-[#faa300] w-4 h-4" />
            {property.propertyBed} Bed
          </div>
          <div className="flex items-center gap-2">
            <Bath className="text-[#faa300] w-4 h-4" />
            {property.propertyBath} Bath
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="text-[#faa300] w-4 h-4" />
            {property.propertySize}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <a
            href={property.whatsappButton}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-1 bg-white border border-[#01062d] text-[#01062d] px-2 py-1 rounded text-lg h-8"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href={property.callButton}
            className="flex justify-center items-center gap-1 bg-white border border-[#01062d] text-[#01062d] font-medium px-2 py-1 rounded text-base h-8"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={property.emailButton}
            className="flex justify-center items-center gap-1 bg-white border border-[#01062d] text-[#01062d] font-medium px-2 py-1 rounded text-base h-8"
          >
            <Mail className="w-4 h-4" />
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
            className="rounded-full text-base text-[#faa300] bg-white border border-[#faa300] hover:bg-[#faa300] hover:text-white px-3 py-1"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
