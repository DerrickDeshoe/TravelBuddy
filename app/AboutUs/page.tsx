import React from "react";
import Image from "next/image";
import Logo from "../../public/imgs/Vector.svg";
import Sea1 from "../../public/imgs/sea1.svg";
import Places from "../Components/Places";
import Place1 from "../public/imgs/placeImage1.png";
import Place2 from "../public/imgs/placeImage2.png";
import Place3 from "../public/imgs/placeImage3.png";
import Place4 from "../public/imgs/placeImage4.png";
import Offers from "../Components/Offers";
import Service1 from "../../public/imgs/service1.png";
import Service2 from "../../public/imgs/service2.png";
import Service3 from "../../public/imgs/service3.png";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={Sea1} alt="banner image" className="w-[350%]"/>
      <div className="p-5 space-y-4 flex flex-wrap justify-center">
        <div className="text-blue flex flex-col justify-center items-center space-y-2 lg:space-y-5 lg:w-[50%]">
          <Image src={Logo} alt="logo" className=" w-[30%] lg:w-[30%]" />
          <p className="font-bold text-3xl tracking-widest lg:text-4xl">
            Travel Buddy
          </p>
        </div>
        <div className="text-sm space-y-3 lg:w-[50%]">
          <p className="text-orange">Who we are</p>
          <h3 className="text-blue font-bold tracking-wider text-2xl lg:w-[60%]">
            We love to discover Indonesia
          </h3>
          <div className="flex flex-col space-y-5">
            <p className="tracking-wider lg:leading-normal  font-light text-gray lg:w-[70%] text-xs">
              Waters make fish every without firmament saw had. Morning air
              subdue. Our. Air very one. Whales grass is fish whales winged
              night yielding land creeping that seed appear were bearing
            </p>
            <p className="tracking-wider lg:leading-normal font-light text-gray lg:w-[70%] text-xs">
              Waters make fish every without firmament saw had. Morning air
              subdue. Our. Air very one. Whales grass is fish whales winged
              night yielding land creeping that seed appear were bearing
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap bg-places-pattern bg-cover bg-center bg-no-repeat justify-center">
        <Places
          placeName="Bali - Indonesia"
          description="An exotic paradise, beckons with vibrant rice terraces, lush jungles, and pristine beaches. Explore ancient temples, surf thrilling waves, and immerse in rich culture for an unforgettable adventure."
          date="12 Aug 2020"
          cost="Starting from $50 000"
        />
        <Places
          placeName="Bora - Bora"
          description="An exotic paradise, beckons with vibrant rice terraces, lush jungles, and pristine beaches. Explore ancient temples, surf thrilling waves, and immerse in rich culture for an unforgettable adventure."
          date="12 Aug 2020"
          cost="Starting from $50 000"
        />
        <Places
          placeName="Bali - Indonesia"
          description="An exotic paradise, beckons with vibrant rice terraces, lush jungles, and pristine beaches. Explore ancient temples, surf thrilling waves, and immerse in rich culture for an unforgettable adventure."
          date="12 Aug 2020"
          cost="Starting from $50 000"
        />
        <Places
          placeName="Bali - Indonesia"
          description="An exotic paradise, beckons with vibrant rice terraces, lush jungles, and pristine beaches. Explore ancient temples, surf thrilling waves, and immerse in rich culture for an unforgettable adventure."
          date="12 Aug 2020"
          cost="Starting from $50 000"
        />
      </div>
      {/* Offers*/}
      <div className="py-[60px] flex flex-col p-5">
        <div className="flex flex-col text-center justify-center space-y-2 pb-5">
          <h2 className="font-bold text-2xl text-blue tracking-wide">
            We offer best services
          </h2>
          <p className="text-xs text-gray2">The Best Service</p>
        </div>
        <div className="flex flex-wrap space-y-5 lg:space-y-0 lg:space-x-5 lg:justify-center">
          <Offers
            image={Service1}
            serviceOffered="Transportation"
            description="All transportation cost we bear"
          />
          <Offers
            image={Service2}
            serviceOffered="Guidence"
            description="We offer the best guidence for you"
          />
          <Offers
            image={Service3}
            serviceOffered="Accomodation"
            description="Luxarious and comfortable"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
