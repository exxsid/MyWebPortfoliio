"use client";

import { useState } from "react";
import { MoveRight, Menu, X } from "lucide-react";

import { THEME, SHADOW } from "@/lib/color-pallete";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="w-full top-0 sticky z-50"
      style={{ backgroundColor: THEME.background }}
    >
      {/* Desktop and Mobile Header */}
      <div className="flex flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[20%] py-4 md:py-6 lg:py-8">
        {/* Logo */}
        <div>
          <h1
            className="text-lg md:text-xl font-bold"
            style={{ color: THEME.dark }}
          >
            lacortezDEV
          </h1>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex flex-row items-center gap-6 lg:gap-10">
          <a href="#home">
            <p className="cursor-pointer hover:font-medium">Home</p>
          </a>
          <a href="#about">
            <p className="cursor-pointer hover:font-medium">About</p>
          </a>
          <a href="#project">
            <p className="cursor-pointer hover:font-medium">Projects</p>
          </a>
        </div>

        {/* Contact Button - Hidden on mobile */}
        <div className="hidden md:block">
          <button
            type="button"
            className="flex flex-row items-center justify-center 
                gap-2 rounded-full border-[0.15rem]
                p-1.5 px-3 lg:p-2 lg:px-4"
            style={{
              borderColor: THEME.dark,
              backgroundColor: THEME.primary,
              boxShadow: SHADOW.sm,
            }}
          >
            Contact <MoveRight size={18} />
          </button>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div
          className="md:hidden flex flex-col w-full py-4 px-4 sm:px-8"
          style={{ backgroundColor: THEME.background }}
        >
          <div className="flex flex-col gap-4 pb-4">
            <p className="cursor-pointer hover:font-medium py-2 border-b border-gray-200">
              Home
            </p>
            <p className="cursor-pointer hover:font-medium py-2 border-b border-gray-200">
              About
            </p>
            <p className="cursor-pointer hover:font-medium py-2 border-b border-gray-200">
              Projects
            </p>
          </div>

          {/* Mobile Contact Button */}
          <div className="pt-2">
            <button
              type="button"
              className="flex flex-row items-center justify-center 
                  gap-2 rounded-full border-[0.15rem]
                  p-1.5 px-3 w-full"
              style={{
                borderColor: THEME.dark,
                backgroundColor: THEME.primary,
                boxShadow: SHADOW.sm,
              }}
            >
              Contact <MoveRight size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
