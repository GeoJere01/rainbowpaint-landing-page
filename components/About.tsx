"use client";
import React from "react";
import { FaHistory, FaPalette, FaLightbulb } from "react-icons/fa"; // Importing relevant icons from react-icons

const AboutPage: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center p-8 gap-12 bg-gradient-to-b from-[#D3E4FF] via-[#FFFFFF] to-[#D3E4FF]">
      
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 animate-fade-in">
        Discover the World of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9A8B] via-[#FFCD38] to-[#FF9A8B]">Rainbow Paints</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
        
        <div className="w-full md:w-1/4 bg-[#D3E4FF] shadow-xl p-8 rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <FaHistory size={40} className="text-primary mb-4" /> 
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our History</h2>
          <p className="text-gray-600">
            Rainbow Paints has a rich legacy of over 50 years in delivering quality paint products. We have transformed countless homes and businesses.
          </p>
        </div>

        
        <div className="w-full md:w-1/2 bg-[#FF9A8B] shadow-2xl p-10 rounded-xl transform hover:scale-105 transition duration-300 ease-in-out relative">
          <FaPalette size={40} className="text-white mb-4" /> 
          <p className="text-white mb-4">
            Our mission is to bring life to your space with vibrant colors and high-quality finishes. We pride ourselves on innovation and customer satisfaction.
          </p>
          <p className="text-white mb-4">
            From residential to commercial projects, Rainbow Paints is your trusted partner in color solutions.
          </p>
          <button className="mt-6 px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:-translate-y-1">
            Explore Our Products
          </button>
          <div className="absolute top-4 right-4 h-3 w-3 bg-white rounded-full animate-ping"></div>
        </div>

      
        <div className="w-full md:w-1/4 bg-[#D3E4FF] shadow-xl p-8 rounded-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <FaLightbulb size={40} className="text-primary mb-4" /> 
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
          <p className="text-gray-600">
            We aim to revolutionize the paint industry by consistently offering sustainable, vibrant, and innovative solutions that last for generations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
