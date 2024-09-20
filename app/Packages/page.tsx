import React from "react";
import Image from "next/image";
import Sea2 from "../../public/imgs/sea2.svg";
import Hotels from "../Components/Hotels";
import Hotel1 from "../../public/imgs/hotel1.png";
import Hotel2 from "../../public/imgs/hotel2.png";
import Hotel3 from "../../public/imgs/hotel3.png";
import Place1 from "../public/imgs/placeImage1.png";
import Place2 from "../public/imgs/placeImage2.png";
import Place3 from "../public/imgs/placeImage3.png";
import Place4 from "../public/imgs/placeImage4.png";
import Places from "../Components/Places";
import Offers from "../Components/Offers";
import Service1 from "../../public/imgs/service1.png";
import Service2 from "../../public/imgs/service2.png";
import Service3 from "../../public/imgs/service3.png";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={Sea2} alt="Banner Image" />
      {/* Top Hotels Section */}
      <div className="flex flex-col pt-[50px] lg:pt-[80px] pb-5 p-5 lg:pb-20">
        <div className="flex flex-col text-center justify-center space-y-2 pb-5">
          <h2 className="font-bold text-2xl text-blue tracking-wide">
            Top Hotel & Restaurants
          </h2>
          <p className="text-xs text-gray2">
            The Best Hotel & Restorants in Indonesia
          </p>
        </div>
        <div className="flex flex-wrap space-y-5 md:space-y-0 md:space-x-5 md:justify-center">
          <Hotels
            picture={Hotel1}
            name="Hotel Grand Indonesia"
            rating="(200 review)"
            location="Jarkata, Indonesia"
            price="$70 000"
          />
          <Hotels
            picture={Hotel2}
            name="Hotel Grand Indonesia"
            rating="(170 review)"
            location="Jarkata, Indonesia"
            price="$90 000"
          />
          <Hotels
            picture={Hotel3}
            name="Hotel Grand Indonesia"
            rating="(140 review)"
            location="Jarkata, Indonesia"
            price="$40 000"
          />
        </div>
      </div>
      {/* Top Hotels End */}
      <div>
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
