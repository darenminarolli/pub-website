'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 py-4 lg:py-8 flex items-center justify-between">
      <Link className="flex items-center gap-2" href="#">
        <span className="font-semibold">Living Room Antik</span>
      </Link>
      <button
        className="lg:hidden block text-gray-800 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
        </svg>
      </button>
      <nav className={`lg:flex gap-4 sm:gap-6 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <Link className="text-sm font-medium hover:underline underline-offset-4 block lg:inline-block mt-2 lg:mt-0" href="#">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 block lg:inline-block mt-2 lg:mt-0" href="#events">
          Events
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 block lg:inline-block mt-2 lg:mt-0" href="#menu">
          Menu
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 block lg:inline-block mt-2 lg:mt-0" href="#photos">
          Photos
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4 block lg:inline-block mt-2 lg:mt-0" href="#contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
