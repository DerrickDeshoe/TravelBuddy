import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from '../../public/imgs/Vector.svg';
import Instagram from '../../public/imgs/Instagram.svg';
import Twitter from '../../public/imgs/Twitter.svg';
import Facebook from '../../public/imgs/Facebook.svg';


const quickLinks = [
  { label: "Bali", href: "#" },
  { label: "Karimun Jawa", href: "#" },
  { label: "Jepara", href: "#" },
  { label: "Lombok", href: "#" },
  { label: "Yogyakarta", href: "#" },
  { label: "Flores", href: "#" },
];

const Footer = () => {
  return (
    <div className="flex flex-col space-y-5 md:space-y-0 bg-blue text-white md:flex-row md:justify-between p-5 ">
      <div className=" flex space-x-2 items-center  md:w-[30%] md:flex md:flex-col md:space-y-2 lg:items-center lg:justify-center">
        <Image src={Logo} alt="logo" className=" w-[10%] lg:w-[25%]"/>
        <p className="font-bold lg:text-2xl tracking-widest">Travel Buddy</p>
      </div>

      <div className="space-y-3 md:w-[30%] lg:flex lg:flex-col lg:items-center  ">
        <div className="space-y-1 ">
          <h3 className="font-semibold text-md mb-3 tracking-widest">DISCOVER DESTINATION</h3>
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className=" flex flex-col hover:text-gray transition-colors text-sm tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-2 md:w-[30%] ">
        <h3 className="font-semibold text-md tracking-widest">CONTACT US</h3>
        <div className="flex flex-col text-sm tracking-widest leading-loose ">
          <p>24 Shipley St.Arvada, CO 80003</p>
          <p>09378493810</p>
          <p>TravelBuddy@gmail.com</p>
        </div>

        <div className="flex flex-col space-y-1">
          <p className="text-orange font-semibold tracking-wider text-xs">Social Media</p>
          <div className="flex space-x-2">
            <Link href='#' className="w-[10%] lg:w-[8%]"><Image src={Instagram} alt='instagram'/></Link>
            <Link href='#' className="w-[10%] lg:w-[8%]"><Image src={Facebook} alt='Facebook'/></Link>
            <Link href='#' className="w-[10%] lg:w-[8%]"><Image src={Twitter} alt='Twitter'/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
