import React, { useState } from 'react';


const AdForm = () => {
  const [adTitle, setAdTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handleAdTitleChange = (e) => {
    const value = e.target.value;
    setAdTitle(value);

    if (value.length < 10) {
      setErrors((prev) => ({ ...prev, adTitle: 'A minimum length of 10 characters is required. Please edit the field.' }));
    } else {
      setErrors((prev) => ({ ...prev, adTitle: '' }));
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value.slice(0, 4096);
    setDescription(value);
  };

  return (
    <div className=" p-1  space-y-5 w-full  bg-white ">
      {/* Facing */}
      <div>
        <label className="block mb-1 font-semibold">Facing</label>
        <select className="border w-96 px-3 py-2 rounded">
          <option value="">Select</option>
          <option value="East">East</option>
          <option value="West">West</option>
          <option value="North">North</option>
          <option value="South">South</option>
        </select>
      </div>

      {/* Project Name */}
      <div>
        <label className="block mb-1 font-semibold">Project Name</label>
        <input
          type="text"
          className="border w-96 px-3 py-2 rounded"
          maxLength={70}
        />
        <div className="text-right text-sm text-gray-500">{adTitle.length} / 70</div>
      </div>

      {/* Ad Title */}
      <div>
        <label className="block mb-1 font-semibold text-black">Ad title *</label>
        <input
          type="text"
          className={`border w-96 px-3 py-2 rounded ${errors.adTitle ? 'border-red-500' : 'border-gray-700'}`}
          value={adTitle}
          onChange={handleAdTitleChange}
          maxLength={70}
        />
        <div className={`text-sm ${errors.adTitle ? 'text-red-600' : 'text-gray-500'}`}>
          {errors.adTitle || `${adTitle.length} / 70`}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block mb-1 font-semibold">Description *</label>
        <textarea
          className="border w-96 px-3 py-2 rounded"
          value={description}
          onChange={handleDescriptionChange}
          rows={5}
        />
        <div className="text-right text-sm text-gray-500">{description.length} / 4096</div>
      </div>

      {/* Price */}
      
    </div>
  );
};

export default AdForm;
