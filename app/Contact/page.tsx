import React from "react";
import Image from "next/image";
import Sea4 from "../../public/imgs/sea4.svg";
import Map from "../../public/imgs/ContactImages/Map.svg";
import Iphone from "../../public/imgs/ContactImages/iPhone.svg";
import Mail from "../../public/imgs/ContactImages/Mail.svg";
import House from "../../public/imgs/ContactImages/Home.svg";

const Contact = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Image src={Sea4} alt="Image" />
      <div className="flex flex-col justify-center p-3 space-y-5">
        <Image src={Map} alt="Map" className="lg:w-[100%]" />
        <div className="flex flex-wrap md:space-x-5 lg:space-x-0">
          <div className="lg:w-[50%] flex flex-col space-y-5">
            <h2 className="text-blue font-semibold tracking-wider">
              Get In Touch
            </h2>
            <input
              type="text"
              placeholder="enter message"
              className="border border-gray p-2 pb-[100px] pr-[113px] md:pb-[150px] text-xs lg:text-sm text-black outline-none"
            />
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="enter your name"
                className="border border-gray p-2 text-xs lg:text-sm text-black outline-none w-[50%]"
              />
              <input
                type="text"
                placeholder="enter your email"
                className="border border-gray p-2 text-xs lg:text-sm  text-black outline-none w-[50%]"
              />
            </div>
            <input
              type="text"
              placeholder="enter your subject"
              className="border border-gray p-2 pr-[113px] text-xs lg:text-sm text-black outline-none"
            />
            <div className="lg:pt-3">
              <button className="bg-orange py-2 px-5 lg:py-3 lg:px-6 text-white text-xs font-thin">
                Send Message
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] pt-5 md:mt-8 space-y-5 text-xs lg:text-sm lg:p-5">
            <div className="flex space-x-3 items-center">
              <Image src={House} alt="Home" className="w-[15%] lg:w-[8%] xl:w-[6%]"/>
              <div className="flex flex-col">
                <p className="text-black tracking-wider">
                  Semarang, Jawa Tengah
                </p>
                <p className="text-gray tracking-wide">Indonesia</p>
              </div>
            </div>
            <div className="flex space-x-3 items-center">
              <Image src={Iphone} alt="Home" className="w-[15%] lg:w-[8%] xl:w-[6%]"/>
              <div className="flex flex-col">
                <p className="text-black tracking-wider">(024) 123981240</p>
                <p className="text-gray tracking-wide">Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="flex space-x-3 items-center">
              <Image src={Mail} alt="Home" className="w-[15%] lg:w-[8%] xl:w-[6%]"/>
              <div className="flex flex-col">
                <p className="text-black tracking-wider">
                  TravelBuddy@gmail.com
                </p>
                <p className="text-gray tracking-wide">
                  Send us your query anytime!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
