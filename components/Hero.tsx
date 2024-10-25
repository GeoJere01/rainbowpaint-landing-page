// Hero.tsx
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";

const Hero = () => {
  return (
    <section className="flex items-center justify-between px-6 md:px-20 py-24 bg-gradient-to-r from-[#D3E4FF] via-[#FFFFFF] to-[#D3E4FF]">
      <div className="flex flex-col justify-center space-y-6 max-w-lg">
        <div className="flex items-center space-x-2 text-gray-700 font-semibold">
          <p className="small-text">Smart Paint Shopping Starts Here:</p>
          <Image
            src="/assets/icons/arrow-right.svg"
            alt="arrow-right"
            width={16}
            height={16}
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
          Unleash the Power of
          <span className="text-primary block text-transparent bg-clip-text bg-gradient-to-r from-[#FF9A8B] via-[#FFCD38] to-[#FF9A8B]">
            Rainbow Paints
          </span>
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          Comprehensive color solutions and expert guidance to enhance, protect, and beautify your spaces.
        </p>

        <a
          href="#contact-form" 
          className="inline-block mt-6 px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Shop Now
        </a>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
