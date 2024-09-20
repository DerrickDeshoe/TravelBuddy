import React from "react";
import Star from "../../public/imgs/Star.png";
import Image, { StaticImageData } from "next/image";

interface Places {
  placeName: string;
  description: string;
  date: string;
  cost: string;
}

const Places = (props: Places) => {
  return (
    <div className="p-5 items-center lg:w-[35%]">
      <div className="bg-white space-y-3 lg:space-y-4 p-3">
        <div className="flex flex-col space-y-2">
          <p className="text-orange text-xs">Upcoming Event</p>
          <h3 className="text-blue font-semibold text-2xl tracking-wider">
            {props.placeName}
          </h3>
        </div>
        <p className="text-gray text-xs">{props.description}</p>
        <div className="space-y-2 text-xs">
          <p className="text-gray">date: {props.date}</p>
          <p className="text-gray">cost: {props.cost}</p>
          <p className="text-gray">organizer: Travel Buddy</p>
          <div className="flex space-x-1 items-center text-gray">
            <p>rating:</p>
            <div className="flex space-x-2">
              <Image src={Star} alt="#" className="w-[10%]" />
              <Image src={Star} alt="#" className="w-[10%] " />
              <Image src={Star} alt="#" className="w-[10%] " />
              <Image src={Star} alt="#" className="w-[10%] " />
              <Image src={Star} alt="#" className="w-[10%] " />
            </div>
          </div>
        </div>

        <div>
          <button className="bg-orange py-2 px-4 text-white text-xs font-medium">
            Plan Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Places;
