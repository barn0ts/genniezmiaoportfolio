"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import ContactModal from './ContactModal';
import Image from "next/image";

export default function NavbarSection() {
  const menuItems = ["Home", "About Me", "Projects", "Resume", "Contact"];
  const router = useRouter();
  const resumeURL = "https://drive.google.com/file/d/1Zzy9mlG6_cpY7dFkfUB5HaxbLuxeGnYs/view?usp=sharing";

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleContactModalClose = () => {
    setIsContactModalOpen(false);
  };

  const handleNavigation = (item: string) => {
    switch (item) {
      case "Home":
        router.push("/");
        break;
      case "About Me":
        router.push("/aboutme");
        break;
      case "Projects":
        router.push("/projects");
        break;
      case "Resume":
        window.open(resumeURL, "_blank");
        break;
      case "Contact":
        handleContactClick();
        return;
      default:
        break;
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className="relative text-gray-900">
      {/* Main Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl bg-white shadow-lg rounded-2xl px-6 py-3 z-50 border border-gray-300">
        <div className="flex items-center justify-between">
          {/* Profile Section */}
          <div className="flex items-center gap-3">
            <Image
              src="/genicon.jpg"
              alt="Profile"
              className="w-11 h-10 rounded-full"
              width={100}
              height={100}
            />
            <div className="flex flex-col">
              <p className="font-bold text-inherit">Genevieve N. Miao</p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <p className="text-sm text-inherit">available for work</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex items-center gap-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item)}
                className="text-gray-900 hover:text-orange-600 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 my-1 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`sm:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="border-t border-gray-200 pt-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item)}
                className="block w-full text-left py-3 px-4 text-gray-900 hover:text-orange-600 hover:bg-gray-50 transition-colors duration-200 rounded-lg font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={handleContactModalClose} />
    </div>
  );
}