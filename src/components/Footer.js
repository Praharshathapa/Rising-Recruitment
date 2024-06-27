import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { socialLinks } from "../data";
import logo from "../images/logo.jpg";

const Footer = () => {
  return (
    <footer className="inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-75 text-white p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </div>

          <div className="flex justify-center items-center">
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white px-4 py-2 rounded-l-md focus:outline-none text-[#333333]"
              />
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-md ml-2 hover:bg-yellow-600 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex justify-end items-center">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} className="text-3xl mx-4">
                {social.name === "Facebook" && <AiOutlineFacebook />}
                {social.name === "Twitter" && <AiOutlineTwitter />}
                {social.name === "LinkedIn" && <AiOutlineLinkedin />}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p>&copy; 2024 Rising Recruitment. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
