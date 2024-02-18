import Link from "next/link";
import React from "react";
import {
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const exploreNavItems = [
    { label: "Homepage", href: "#" },
    { label: "For jobseekers", href: "#" },
    { label: "For clients", href: "#" },
    { label: "Our sectors", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Contact us", href: "#" },
  ];

  const sectorNavItems = [
    { label: "Software engineering", href: "#" },
    { label: "DevOps", href: "#" },
    { label: "Cloud", href: "#" },
    { label: "Infrastructure", href: "#" },
    { label: "Testing", href: "#" },
    { label: "Security", href: "#" },
  ];

  const serviceNavItems = [
    { label: "Custom Software Development", href: "#" },
    { label: "IT Consulting", href: "#" },
    { label: "Cloud Solutions", href: "#" },
    { label: "Cybersecurity Services", href: "#" },
    { label: "Mobile App Development", href: "#" },
  ];

  return (
    <footer className="footer">
      <div className="bg-[#064EA4] text-white px-4 lg:px-6 py-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-4 md:flex-row md:justify-around md:gap-8 lg:flex-row lg:justify-between lg:gap-8">
            <div className="mb-2 md:mb-0 lg:mb-0">
              <span className="text-xl font-semibold">
                Software Recruitment Co.
              </span>
              <div className="mt-4 flex space-x-4 lg:space-x-4">
                <FaLinkedinIn className="h-6 w-6" />
                <FaFacebook className="h-6 w-6" />
                <FaInstagram className="h-6 w-6" />
                <FaTwitter className="h-6 w-6" />
              </div>
            </div>

            <div className="mb-2 lg:mb-0 lg:mr-4">
              <h3 className="text-lg font-semibold mb-2">Explore</h3>
              <ul>
                {exploreNavItems.map((item) => (
                  <li key={item.label} className="mb-1">
                    <a href={item.href} className="hover:text-gray-400">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-2 lg:mb-0 lg:mr-4">
              <h3 className="text-lg font-semibold mb-2">Sector</h3>
              <ul>
                {sectorNavItems.map((item) => (
                  <li key={item.label} className="mb-1">
                    <a href={item.href} className="hover:text-gray-400">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-2 lg:mb-0 lg:mr-4">
              <h3 className="text-lg font-semibold mb-2">Service</h3>
              <ul>
                {serviceNavItems.map((item) => (
                  <li key={item.label} className="mb-1">
                    <a href={item.href} className="hover:text-gray-400">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
