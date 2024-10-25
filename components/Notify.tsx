
import React, { useState } from "react";

const ShopForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    location: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/pages/api/sendEmail.ts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div
      id="contact-form" 
      className="min-h-screen flex items-center justify-center p-8 relative bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        <div className="absolute w-96 h-96 bg-yellow-400 rounded-full opacity-50 -top-20 -left-40 transform rotate-12"></div>
        <div className="absolute w-72 h-72 bg-blue-400 rounded-full opacity-50 top-20 right-0 transform rotate-45"></div>
        <div className="absolute w-80 h-80 bg-red-400 rounded-full opacity-50 bottom-10 left-10 transform rotate-6"></div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative bg-white p-8 rounded-lg shadow-lg max-w-md w-full z-10 transform transition duration-300 ease-in-out hover:scale-105"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>

        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          required
        />

        <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name:</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          required
        />

        <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          required
        />

        <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          required
        />

        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Short Description:</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-4 rounded-md font-semibold shadow-md hover:bg-opacity-90 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ShopForm;
