import React, { useState } from "react";

const SearchForm = () => {
  const [type, setType] = useState("rent");
  const [expand, setExpand] = useState(false);
  const [formData, setFormData] = useState({
    city: "",
    propertyType: "",
    bedroom: "",
    size: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search data:", { type, ...formData });
  };

  const handleReset = () => {
    setType("rent");
    setFormData({
      city: "",
      propertyType: "",
      bedroom: "",
      size: "",
      price: "",
    });
    setExpand(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-10">
      {/* Mobile View as Modal */}
      <div className="block md:hidden">
        {/* Rent / Sale Toggle */}
        <div className="flex justify-start gap-3 mb-4">
          <div className="flex bg-gray-200 rounded-full overflow-hidden w-fit">
            <button
              onClick={() => setType("rent")}
              className={`px-4 py-1 text-sm font-medium ${
                type === "rent" ? "bg-[#01062d] text-white" : "text-[#01062d]"
              }`}
            >
              Rent
            </button>
            <button
              onClick={() => setType("buy")}
              className={`px-4 py-1 text-sm font-medium ${
                type === "buy" ? "bg-[#01062d] text-white" : "text-[#01062d]"
              }`}
            >
              Sale
            </button>
          </div>
        </div>

        {/* City Input + Settings Button */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
            className="flex-1 bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={() => setExpand(true)}
            className="text-white bg-[#01062d] p-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-settings-icon lucide-settings"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>

        {/* Modal Overlay */}
        {expand && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md p-6 rounded-xl overflow-y-auto max-h-[90vh] relative">
              <button
                onClick={() => setExpand(false)}
                className="absolute top-2 right-3 text-gray-600 text-xl"
              >
                &times;
              </button>

              {/* Pills inside modal */}
              <div className="flex justify-start gap-3 mb-4">
                <div className="flex bg-gray-200 rounded-full overflow-hidden w-fit">
                  <button
                    onClick={() => setType("rent")}
                    className={`px-4 py-1 text-sm font-medium ${
                      type === "rent"
                        ? "bg-[#01062d] text-white"
                        : "text-[#01062d]"
                    }`}
                  >
                    Rent
                  </button>
                  <button
                    onClick={() => setType("buy")}
                    className={`px-4 py-1 text-sm font-medium ${
                      type === "buy"
                        ? "bg-[#01062d] text-white"
                        : "text-[#01062d]"
                    }`}
                  >
                    Sale
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="bg-white border border-gray-300 px-3 py-2 rounded-md"
                >
                  <option value="">Select Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Townhouse</option>
                </select>

                <select
                  name="bedroom"
                  value={formData.bedroom}
                  onChange={handleChange}
                  className="bg-white border border-gray-300 px-3 py-2 rounded-md"
                >
                  <option value="">Select Bedroom</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3+</option>
                </select>

                <input
                  type="number"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  placeholder="Size e.g. 1000"
                  className="bg-white border border-gray-300 px-3 py-2 rounded-md"
                />

                <select
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="bg-white border border-gray-300 px-3 py-2 rounded-md"
                >
                  <option value="">Select Price</option>
                  <option>Below 1M</option>
                  <option>1M - 2M</option>
                  <option>2M+</option>
                </select>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button
                    type="submit"
                    className="bg-[#faa300] text-white px-6 py-2 rounded-3xl w-full"
                  >
                    Search
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-[#01062d] underline text-sm flex items-center justify-center gap-1 w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-refresh-cw-icon lucide-refresh-cw"
                    >
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                      <path d="M21 3v5h-5" />
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                      <path d="M8 16H3v5" />
                    </svg>
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Desktop View (Visible by default) */}
      <div className="hidden md:block">
        <div className="relative flex bg-gray-200 rounded-full w-60 h-10 cursor-pointer mb-6">
          <div
            className={`absolute top-0 h-full w-1/2 bg-[#01062d] rounded-full transition-all duration-300 ${
              type === "buy" ? "left-1/2" : "left-0"
            }`}
          ></div>
          <div
            className="flex-1 flex items-center justify-center z-10 text-sm font-medium"
            onClick={() => setType("rent")}
          >
            <span className={type === "rent" ? "text-white" : "text-[#01062d]"}>
              For Rent
            </span>
          </div>
          <div
            className="flex-1 flex items-center justify-center z-10 text-sm font-medium"
            onClick={() => setType("buy")}
          >
            <span className={type === "buy" ? "text-white" : "text-[#01062d]"}>
              For Sale
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col md:flex-row gap-2 md:items-end">
            <div className="flex flex-col w-full md:w-1/5">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                className="bg-white border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
              />
            </div>

            <div className="flex flex-col w-full md:w-1/5">
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="bg-white border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
              >
                <option value="">Select Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Townhouse</option>
              </select>
            </div>

            <div className="flex flex-col w-full md:w-1/5">
              <select
                name="bedroom"
                value={formData.bedroom}
                onChange={handleChange}
                className="bg-white border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
              >
                <option value="">Select Bedroom</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </div>

            <div className="flex flex-col w-full md:w-1/5">
              <input
                type="number"
                name="size"
                value={formData.size}
                onChange={handleChange}
                placeholder="Size e.g. 1000"
                className="bg-white border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
              />
            </div>

            <div className="flex flex-col w-full md:w-1/5">
              <select
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="bg-white border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
              >
                <option value="">Select Price</option>
                <option>Below 1M</option>
                <option>1M - 2M</option>
                <option>2M+</option>
              </select>
            </div>

            <div className="flex flex-col w-full md:w-auto">
              <button
                type="submit"
                className="h-12 mt-4 md:mt-0 bg-[#faa300] text-white px-6 py-2 rounded-3xl hover:bg-[#01062d] hover:text-[#faa300] transition"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
