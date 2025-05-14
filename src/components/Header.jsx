import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const Header = () => (
  <header className="bg-gray-100 border-b border-gray-300 p-4 flex items-center h-16">
    <button aria-label="Go back" className="text-black text-xl">
      <FaArrowLeft />
    </button>
  </header>
);

export default Header;
