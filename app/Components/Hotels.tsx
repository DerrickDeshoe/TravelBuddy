import React from "react";
import Image, { StaticImageData } from "next/image";
import Star from "../../public/imgs/Star.png";

interface hotelInfo {
  picture: StaticImageData;
  name: string;
  rating: string;
  location: string;
  price: string;
}

const Hotels = (props: hotelInfo) => {
  return (
    <div className="flex flex-col space-y-3 lg:w-[30%]">
      <Image src={props.picture} alt="#" className="" />
      <h4 className="font-semibold tracking-widest">{props.name}</h4>
      <div className="flex items-center space-x-1">
        <div className="flex space-x-1 items-center w-[30%] md:w-[40%] lg:w-[50%]">
          <Image src={Star} alt="#" className="w-[30%]" />
          <Image src={Star} alt="#" className="w-[30%]" />
          <Image src={Star} alt="#" className="w-[30%]" />
          <Image src={Star} alt="#" className="w-[30%]" />
          <Image src={Star} alt="#" className="w-[30%]" />
        </div>
        <p className="text-xs pt-[2px] md:pt-[5px] lg:pt-[9px]">{props.rating}</p>
      </div>
      <p className="text-gray text-sm">{props.location}</p>
      <div className="flex space-x-2">
        <p className="text-xs">From</p>
        <p className="text-red text-xs">{props.price}</p>
      </div>
    </div>
  );
};

export default Hotels;
