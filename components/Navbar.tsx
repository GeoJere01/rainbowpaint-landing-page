"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Products', href: '#product' },
  { id: 4, name: 'Contact', href: '#contact' },
  { id: 5, name: 'Colours', href: '#colour' },
  { id: 6, name: 'Solutions', href: '#solution' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full relative z-20">
      <nav className="nav flex justify-between items-center py-5 px-4 md:px-8 bg-[#E5E7EB] shadow-md">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image src="/assets/images/rainbow-logo.PNG" width={27} height={27} alt="logo"/>
          <p className="nav-logo text-lg font-bold">
            Rainbow<span className="text-primary">Paints</span>
          </p>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((item) => (
            <li key={item.id} className="nav-li">
              <a href={item.href} className="nav-li_a text-neutral-600 hover:text-primary transition-colors">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <Image src="/assets/icons/x-close.svg" width={24} height={24} alt="close-menu" />
            ) : (
              <Image src="/assets/icons/open-menu-6208.svg" width={24} height={24} alt="open-menu" />
            )}
          </button>
        </div>
      </nav>

      <ul
        className={`absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col space-y-3 px-4 md:hidden z-30 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        {navLinks.map((item) => (
          <li key={item.id} className="nav-li">
            <a href={item.href} className="nav-li_a block text-neutral-600 hover:text-primary transition-colors">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
