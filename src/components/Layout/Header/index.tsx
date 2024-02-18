"use client";

import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import { defaultNavItems } from "./defaultNavItems";
import { TiArrowSortedDown, TiThMenu, TiTimes } from "react-icons/ti";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl lg:space-x-1">
          <a href="/" className="flex flex-start items-center">
            <span className="w-[150px] md:w-[250px] text-[#064EA4] break-normal md:break-all self-center text-xl font-semibold text-wrap">
              Software Recruitment Co
            </span>
          </a>
          <div
            className="hidden lg:flex lg:w-auto lg:order-1"
            id="desktop-menu"
          >
            {/* Desktop Menu */}
            <ul className="flex flex-grow mt-4 font-medium lg:flex-row lg:mt-0">
              {defaultNavItems.map((item) => (
                <li key={item.id} className="relative group">
                  <a
                    href={item.subItems && item.subItems.length > 0 ? "#" : item.link}
                    className="block py-1 pl-4 text-gray-700 hover:bg-gray-50 flex"
                  >
                    {item.label}
                    <div className="ml-auto p-1">
                      {item.subItems && item.subItems.length > 0 && (
                        <TiArrowSortedDown color="black"></TiArrowSortedDown>
                      )}
                    </div>
                  </a>
                  {item.subItems && item.subItems.length > 0 && (
                    <ul className="absolute hidden mt-0 space-y-1 bg-[#91c2ff] rounded-[5px] border group-hover:block z-50">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.id}>
                          <a
                            href={subItem.link}
                            className="block py-2 px-4 text-gray-600 hover:bg-gray-50 hover:rounded-[5px]"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-[#451B09] bg-[#FCDF69] text-center font-medium rounded-[20px] text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            >
              Upload CV
            </a>
            <a
              href="#"
              className="text-[#451B09] bg-[#F99D76] text-center font-medium rounded-[20px] text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            >
              Contact Us
            </a>
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <TiTimes /> : <TiThMenu size={20} />}
            </button>
          </div>
          {/* Mobile Menu */}
          <MobileMenu
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
