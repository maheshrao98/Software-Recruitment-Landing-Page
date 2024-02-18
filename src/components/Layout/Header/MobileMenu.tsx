"use client";

import React from "react";
import { TiTimes } from "react-icons/ti";
import ExpandableList from "./ExpandableList";
import { defaultNavItems } from "./defaultNavItems";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
}) => {
  return (
    <div
      className={`lg:hidden fixed top-0 right-0 w-full h-screen bg-white z-50 ${
        isMobileMenuOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center p-3">
        <a href="/">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-[#064EA4]">
            Software Recruitment Co.
          </span>
        </a>
        <button
          onClick={toggleMobileMenu}
          className="p-2 ml-auto rounded-full bg-[#064EA4] text-white hover:bg-grey-400 focus:outline-none focus:ring focus:border-[#064EA4]"
        >
          <TiTimes></TiTimes>
        </button>
      </div>

      <div className="overflow-y-auto max-h-screen">
        <ul className="flex flex-col mt-4 font-medium">
          {defaultNavItems.map((item) =>
            item.subItems && item.subItems.length > 0 ? (
              <ExpandableList key={item.id} item={item} />
            ) : (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="block py-2 pl-4 text-gray-700 hover:bg-gray-50"
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
