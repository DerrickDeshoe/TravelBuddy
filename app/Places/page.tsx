import React from "react";
import Image from "next/image";
import Sea3 from "../../public/imgs/sea3.svg";
import Place1 from "../../public/imgs/placesImages/place1.svg";
import Place2 from "../../public/imgs/placesImages/place2.svg";
import Place3 from "../../public/imgs/placesImages/place3.svg";
import Place4 from "../../public/imgs/placesImages/place4.svg";
import Place5 from "../../public/imgs/placesImages/place5.svg";
import Place6 from "../../public/imgs/placesImages/place6.svg";
import Place7 from "../../public/imgs/placesImages/place7.svg";
import Place8 from "../../public/imgs/placesImages/place8.svg";

const page = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Image src={Sea3} alt="Banner Image" />
      <div className="flex flex-col justify-center text-center p-5 py-10">
        <div className="flex flex-col space-y-2 pb-5">
          <h2 className="text-blue font-bold text-2xl tracking-widest">
            Places
          </h2>
          <p className="text-gray tracking-normal">
            The Best Place to Stay in Indonesia
          </p>
        </div>
        <div className="space-y-5 lg:flex lg:flex-wrap lg:space-y-0 justify-between ">
          <Image src={Place1} alt='Image' className="lg:w-[48%] lg:pb-10"/>
          <Image src={Place2} alt='Image' className="lg:w-[48%] lg:pb-10"/>
          <Image src={Place3} alt='Image' className="lg:w-[48%] lg:pb-10"/>
          <Image src={Place4} alt='Image' className="lg:w-[48%] lg:pb-10"/>
          <Image src={Place5} alt='Image' className="lg:w-[48%] lg:pb-10"/>
          <Image src={Place6} alt='Image' className="lg:w-[48%] lg:pb-10"/>
          <Image src={Place7} alt='Image' className="lg:w-[48%] lg:pb-10"/>
          <Image src={Place8} alt='Image' className="lg:w-[48%] lg:pb-10"/>
        </div>
      </div>
    </div>
  );
};

export default page;
