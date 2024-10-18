"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/imgs/Vector.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/AboutUs" },
    { label: "Packages", href: "/Packages" },
    { label: "Places", href: "/Places" },
    { label: "Contact", href: "/Contact" },
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 h-14 flex items-center justify-between px-10 z-10 bg-white">
      <div className="flex items-center space-x-2 text-blue">
        <Image src={Logo} alt="Logo" className=" w-[30px] md:w-[13%]" />
        <p className="font-bold tracking-wide">Travel Buddy</p>
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray hover:text-zinc-500 focus:outline-none"
        >
          <svg
            className="h-7 w-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex lg:items-center space-x-10">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray hover:text-zinc-500 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Link href="#">
          <button className="bg-orange py-2 px-5 text-white text-xs font-medium">
            Book Now
          </button>
        </Link>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-14 left-0 right-0 bg-gray h-[50vh] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-200 hover:text-zinc-500 transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button className="bg-orange py-2 px-5 text-white text-xs font-medium">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
