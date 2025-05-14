import React, { useState } from "react";
import PropertyAdditionalDetails from "./PropertyAdditionalDetails";
import AdForm from "./AdForm";
import PriceSection from "./PriceSection";


const options = {
  type: ["Flats / Apartments", "Independent / Builder Floors", "Farm House", "House & Villa"],
  bhk: ["1", "2", "3", "4", "4+"],
  bathrooms: ["1", "2", "3", "4", "4+"],
  furnishing: ["Furnished", "Semi-Furnished", "Unfurnished"],
  status: ["New Launch", "Ready to Move", "Under Construction"]
};

const PropertyDetailsForm = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedBHK, setSelectedBHK] = useState(null);
  const [selectedBathrooms, setSelectedBathrooms] = useState(null);
  const [selectedFurnishing, setSelectedFurnishing] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const [error, setError] = useState({ type: false });

  return (
    <div className="p-6 space-y-6">
      <h2 className="font-bold text-lg">INCLUDE SOME DETAILS</h2>

      {/* TYPE FIELD */}
      <div>
        <label
          className={`font-semibold block mb-2 ${
            error.type ? "text-red-600" : ""
          }`}
        >
          Type *
        </label>
        <div className="flex flex-wrap gap-2">
          {options.type.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => {
                setSelectedType(label);
                setError((prev) => ({ ...prev, type: false }));
              }}
              className={`border px-4 py-2 rounded-md ${
                selectedType === label
                  ? "bg-blue-200 text-white"
                  : "hover:bg-gray-100"
              } ${error.type ? "border-red-500" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>
        {error.type && (
          <p className="text-red-600 text-sm mt-1">
            Type is mandatory. Please complete the required field.
          </p>
        )}
      </div>

      {/* BHK FIELD */}
      <div>
        <label className="font-semibold block mb-2">BHK</label>
        <div className="flex flex-wrap gap-2">
          {options.bhk.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setSelectedBHK(label)}
              className={`border px-4 py-2 rounded-md ${
                selectedBHK === label
                  ? "bg-blue-200 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* BATHROOMS FIELD */}
      <div>
        <label className="font-semibold block mb-2">Bathrooms</label>
        <div className="flex flex-wrap gap-2">
          {options.bathrooms.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setSelectedBathrooms(label)}
              className={`border px-4 py-2 rounded-md ${
                selectedBathrooms === label
                  ? "bg-blue-200 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* FURNISHING FIELD */}
      <div>
        <label className="font-semibold block mb-2">Furnishing</label>
        <div className="flex flex-wrap gap-2">
          {options.furnishing.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setSelectedFurnishing(label)}
              className={`border px-4 py-2 rounded-md ${
                selectedFurnishing === label
                  ? "bg-blue-200 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* STATUS FIELD */}
      <div>
        <label className="font-semibold block mb-2">Project Status</label>
        <div className="flex flex-wrap gap-2">
          {options.status.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setSelectedStatus(label)}
              className={`border px-4 py-2 rounded-md ${
                selectedStatus === label
                  ? "bg-blue-200 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <PropertyAdditionalDetails/>
      <AdForm/>
      
    </div>
  );
};

export default PropertyDetailsForm