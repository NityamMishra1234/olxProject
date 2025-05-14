import React from "react";
import OptionSelector from "./OptionSelector";

const FormDetails = () => (
  <div className="p-6">
    <h3 className="font-bold text-base mb-4">INCLUDE SOME DETAILS</h3>

    <OptionSelector
      label="Type *"
      options={["Flats / Apartments", "Independent / Builder Floors", "Farm House", "House & Villa"]}
    />

    <OptionSelector label="BHK" options={["1", "2", "3", "4", "4+"]} square />
    <OptionSelector label="Bathrooms" options={["1", "2", "3", "4", "4+"]} square />
    <OptionSelector label="Furnishing" options={["Furnished", "Semi-Furnished", "Unfurnished"]} />
  </div>
);

export default FormDetails;
