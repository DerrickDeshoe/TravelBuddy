import React from "react";
import Image from "next/image";
import Star from "../../public/imgs/Star.png";


interface Speakers {
    
    description: string,
    name: string,
}
const Testimonials = (props: Speakers) => {
  return (
    <div className=" bg-lighttBlue p-5 lg:w-[30%] space-y-5">
      <div className="flex space-x-1">
        <Image src={Star} alt="star" className="w-[7%]"/>
        <Image src={Star} alt="star" className="w-[7%]"/>
        <Image src={Star} alt="star" className="w-[7%]"/>
        <Image src={Star} alt="star" className="w-[7%]"/>
      </div>
      <p className="text-sm md:text-[15px] tracking-wide leading-normal font-light">{props.description}</p>
      <p className="text-sm md:text-[15px] tracking-wider">{props.name}</p>
    </div>
  );
};

export default Testimonials;
