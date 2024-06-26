import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import office from "../images/office.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent text-[#333333] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={office}
            alt="Office Logo"
            className="lg:mx-0 mx-[-30%] w-[300px] object-cover h-[50px] bg-cover"
          />
        </div>

        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4">
            <a
              href="#"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              About Us
            </a>
          </nav>
          <button className="hidden md:block bg-[#3e4a9a] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-200">
            Contact Us
          </button>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md mt-2">
          <nav className="flex flex-col items-start p-4 space-y-2">
            <a
              href="#"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              About Us
            </a>
            <button className="bg-[#3e4a9a] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-200">
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
