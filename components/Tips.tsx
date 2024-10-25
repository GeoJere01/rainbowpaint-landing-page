"use client";

import { FaBrush, FaTint, FaTools } from "react-icons/fa";

const PaintingTips = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center"
      style={{ backgroundImage: `url('/assets/images/RP_Web_Banner-1.png')` }} 
    >
      
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-shadow-lg">
        Expert Painting Tips
      </h1>

      <div className="flex flex-col gap-8 max-w-5xl mx-auto text-center p-6">
        <div className="flex items-center gap-4 bg-black bg-opacity-50 p-6 rounded-lg shadow-md">
          <FaBrush className="text-4xl text-primary" />
          <div>
            <h2 className="text-2xl font-semibold">Choose the Right Brush</h2>
            <p>
              A good brush makes all the difference. Use natural-bristle brushes
              for oil-based paint and synthetic for latex paint.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-black bg-opacity-50 p-6 rounded-lg shadow-md">
          <FaTint className="text-4xl text-primary" />
          <div>
            <h2 className="text-2xl font-semibold">Don’t Skimp on Primer</h2>
            <p>
              Primer helps paint adhere to the surface, ensures the true color
              shines, and protects the wall material.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-black bg-opacity-50 p-6 rounded-lg shadow-md">
          <FaTools className="text-4xl text-primary" />
          <div>
            <h2 className="text-2xl font-semibold">Prep Your Surface</h2>
            <p>
              Clean walls and fill in any cracks or holes. Sand the surface to
              make sure the paint sticks evenly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintingTips;
