import React, { useState } from "react";



const PropertyAdditionalDetails = () => {
  const [listedBy, setListedBy] = useState(null);
  const [carParking, setCarParking] = useState(null);

  const [superBuiltupArea, setSuperBuiltupArea] = useState("");
  const [carpetArea, setCarpetArea] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [totalFloors, setTotalFloors] = useState("");
  const [floorNo, setFloorNo] = useState("");

  const [error, setError] = useState({
    carpetArea: false,
    superBuiltupArea: false,
  });

  const numberInputStyle =
    "w-96 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400";

  const handleNumberInput = (e, setter) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) setter(value);
  };

  const validateFields = () => {
    const newError = {
      carpetArea: carpetArea.trim() === "",
      superBuiltupArea: superBuiltupArea.trim() === "",
    };
    setError(newError);
    return !Object.values(newError).includes(true);
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log("Form is valid, you can submit or move to next step.");
      // Submit form or move to next step
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <>
    <div className="p-1  space-y-6">
      

      {/* Listed By */}
      <div>
        <label className="font-semibold block mb-2">Listed by</label>
        <div className="flex gap-2 flex-wrap">
          {["Builder", "Dealer", "Owner"].map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setListedBy(label)}
              className={`border px-4 py-2 rounded-md ${
                listedBy === label
                  ? "bg-blue-200 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Super Builtup Area */}
      <div>
        <label
          className={`font-semibold block mb-2 ${
            error.superBuiltupArea ? "text-red-600" : ""
          }`}
        >
          Super Builtup area sqft *
        </label>
        <input
          type="text"
          value={superBuiltupArea}
          onChange={(e) => {
            handleNumberInput(e, setSuperBuiltupArea);
            setError((prev) => ({ ...prev, superBuiltupArea: false }));
          }}
          onBlur={() => {
            if (superBuiltupArea.trim() === "") {
              setError((prev) => ({ ...prev, superBuiltupArea: true }));
            }
          }}
          className={`${numberInputStyle} ${
            error.superBuiltupArea ? "border-red-500" : ""
          }`}
        />
        {error.superBuiltupArea && (
          <p className="text-red-600 text-sm mt-1">
            Super Builtup area is required. Please fill it.
          </p>
        )}
      </div>

      {/* Carpet Area */}
      <div>
        <label
          className={`font-semibold block mb-2 ${
            error.carpetArea ? "text-red-600" : ""
          }`}
        >
          Carpet Area sqft *
        </label>
        <input
          type="text"
          value={carpetArea}
          onChange={(e) => {
            handleNumberInput(e, setCarpetArea);
            setError((prev) => ({ ...prev, carpetArea: false }));
          }}
          onBlur={() => {
            if (carpetArea.trim() === "") {
              setError((prev) => ({ ...prev, carpetArea: true }));
            }
          }}
          className={`${numberInputStyle} ${
            error.carpetArea ? "border-red-500" : ""
          }`}
        />
        {error.carpetArea && (
          <p className="text-red-600 text-sm mt-1">
            Carpet Area sqft is mandatory. Please complete the required field.
          </p>
        )}
      </div>

      {/* Maintenance */}
      <div>
        <label className="font-semibold block mb-2">
          Maintenance (Monthly)
        </label>
        <input
          type="text"
          value={maintenance}
          onChange={(e) => handleNumberInput(e, setMaintenance)}
          className={numberInputStyle}
        />
      </div>

      {/* Total Floors */}
      <div>
        <label className="font-semibold block mb-2">Total Floors</label>
        <input
          type="text"
          value={totalFloors}
          onChange={(e) => handleNumberInput(e, setTotalFloors)}
          className={numberInputStyle}
        />
      </div>

      {/* Floor No */}
      <div>
        <label className="font-semibold block mb-2">Floor No</label>
        <input
          type="text"
          value={floorNo}
          onChange={(e) => handleNumberInput(e, setFloorNo)}
          className={numberInputStyle}
        />
      </div>

      {/* Car Parking */}
      <div>
        <label className="font-semibold block mb-2">Car Parking</label>
        <div className="flex gap-2 flex-wrap">
          {["0", "1", "2", "3", "3+"].map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setCarParking(label)}
              className={`border px-4 py-2 rounded-md ${
                carParking === label
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Submit or Next Step Button */}
      
    </div>
    
    </>
  );
};

export default PropertyAdditionalDetails;
