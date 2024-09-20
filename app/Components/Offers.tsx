import Image, { StaticImageData } from "next/image";
import React from "react";

interface offers {
  image: StaticImageData;
  serviceOffered: string;
  description: string;
}

const Offers = (props: offers) => {
  return (
    <div className="flex flex-col space-y-4 lg:w-[30%]">
      <Image src={props.image} alt="image" />
      <div className="flex flex-col space-y-2">
        <p className="font-semibold tracking-wider text-lg">{props.serviceOffered}</p>
        <p className="tracking-wide text-gray">{props.description}</p>
      </div>
    </div>
  );
};

export default Offers;
