import React, { useState } from 'react';

const locationData = {
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangalore", "Hubli"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
  "Delhi": ["New Delhi", "Dwarka", "Rohini", "Saket"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri"],
  "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
  "Punjab": ["Amritsar", "Ludhiana", "Jalandhar", "Patiala"]
};

const LocationSelector = () => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (state && city && neighborhood.trim()) {
      alert(`Location: ${state}, ${city}, ${neighborhood}`);
      // Reset form if needed
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 mx-auto p-6 border border-gray-300 ">
      <h2 className="text-xl font-bold mb-6">CONFIRM YOUR LOCATION</h2>

      {/* Tabs UI */}
      <div className="flex border-b mb-4">
        <div className="px-4 py-2 font-semibold text-blue-800 border-b-2 border-blue-800">LIST</div>
        <div className="px-4 py-2 text-gray-500">CURRENT LOCATION</div>
      </div>

      {/* State Dropdown */}
      <div className="mb-4">
        <label className="block font-medium mb-1">
          State <span className="text-red-500">*</span>
        </label>
        <select
          className="w-full border rounded px-3 py-2"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            setCity('');
          }}
        >
          <option value="">Select State</option>
          {Object.keys(locationData).map((st) => (
            <option key={st} value={st}>{st}</option>
          ))}
        </select>
        {submitted && !state && (
          <p className="text-red-500 text-sm mt-1">This field is mandatory</p>
        )}
      </div>

      {/* City Dropdown */}
      {state && (
        <div className="mb-4">
          <label className="block font-medium mb-1">
            City <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full border rounded px-3 py-2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select City</option>
            {locationData[state].map((ct) => (
              <option key={ct} value={ct}>{ct}</option>
            ))}
          </select>
          {submitted && !city && (
            <p className="text-red-500 text-sm mt-1">This field is mandatory</p>
          )}
        </div>
      )}

      {/* Neighborhood Input */}
      {city && (
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Neighbourhood <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
          />
          {submitted && !neighborhood.trim() && (
            <p className="text-red-500 text-sm mt-1">This field is mandatory</p>
          )}
        </div>
      )}

      <button
        type="submit"
        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default LocationSelector;
