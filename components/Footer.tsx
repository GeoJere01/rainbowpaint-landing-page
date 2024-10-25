import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-10 px-4 font-serif"> 
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-10">
        
        <div className="text-center lg:text-left">
          <h2 className="text-5xl font-extrabold mb-2">Rainbow Painting</h2> 
          <p className="text-base lg:text-lg">Bringing colors to life, one stroke at a time.</p> 
        </div>

        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 text-center">
          <a href="#home" className="hover:text-gray-200 transition-colors duration-300 text-lg lg:text-xl">Home</a> 
          <a href="#about" className="hover:text-gray-200 transition-colors duration-300 text-lg lg:text-xl">About</a>
          <a href="#gallery" className="hover:text-gray-200 transition-colors duration-300 text-lg lg:text-xl">Gallery</a>
          <a href="#contact" className="hover:text-gray-200 transition-colors duration-300 text-lg lg:text-xl">Contact</a>
        </div>

        <div className="flex space-x-6 text-3xl"> 
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-200 transition-colors duration-300">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-200 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-200 transition-colors duration-300">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-200 transition-colors duration-300">
            <FaLinkedinIn />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" className="hover:text-gray-200 transition-colors duration-300">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-sm lg:text-base">
        <p>Contact us: <a href="mailto:info@rainbowpainting.com" className="hover:underline">info@rainbowpainting.com</a> | Phone: (+265) 999-029-511</p>
        <p className="mt-2">Visit us at: 123 Rainbow Street, Paint City, PC 45678</p>
        <p className="mt-4 max-w-xl mx-auto text-base lg:text-lg">Rainbow Painting is dedicated to bringing joy and creativity into every space with our vibrant and imaginative art pieces. Whether it’s a mural or a personal piece, we help turn your vision into a colorful reality.</p>
        <p className="mt-4 text-sm lg:text-base">&copy; {new Date().getFullYear()} Rainbow Painting. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
