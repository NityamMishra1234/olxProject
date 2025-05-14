import React from 'react';

const PriceSection = () => {
  return (
    <div className="flex justify-center ">
      <div className="border border-gray-300 w-1/2 ">
      <div className="ml-6 mt-6">
          <h2 className="text-xl font-bold text-black mb-4">SET A PRICE</h2>

        <label className="block text-gray-600 text-sm font-medium mb-1">
          Price<span className="text-red-500">*</span>
        </label>

        <div className="flex items-center border border-gray-400 rounded-md overflow-hidden w-1/2  mb-8">
          <div className="px-3 py-2 bg-gray-100 text-gray-700 border-r border-gray-300 text-lg">
            ₹
          </div>
          <input
            type="number"
            placeholder="Enter price"
            className="w-full px-3 py-2 text-gray-900 focus:outline-none"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default PriceSection;
