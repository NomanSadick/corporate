"use client"; // Add this directive at the very top

import { useState } from "react";
import Image from "next/image";
// import ToggleSwitch from "./reusableComponents/ToggleSwitch";

const Navbar: React.FC = () => {
  const navItems = [
    {
      label: "All Package",
      href: "#allPackage",
      dropdown: [
        { label: "Family Package", href: "#familyPackage" },
        { label: "Adventure Package", href: "#adventurePackage" },
      ],
    },
    { label: "Visa", href: "#visa" },
    { label: "Contact", href: "#contact" },
    {
      label: "Others",
      href: "#others",
      dropdown: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "#team" },
      ],
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className=" w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-2 md:py-4 flex justify-between items-center">
        <div className="">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            className="object-cover w-[100%]"
          />
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {/* Main Menu Item */}
              <a
                href={item.href}
                className="cursor-pointer text-gray-600 hover:text-blue-600 transition flex items-center"
                onClick={(e) => {
                  if (item.dropdown) {
                    e.preventDefault();
                    handleDropdownToggle(item.label);
                  }
                }}
              >
                {item.label}
                {item.dropdown && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </a>

              {/* Dropdown Menu */}
              {item.dropdown && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md w-48 z-50">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <ToggleSwitch />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            <svg
              className="w-5 h-5 text-orange-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;