"use client";

import React from "react";
import Image from "next/image";
import TabNavigation from "./Components/TabNavigation";
import Place1 from "../public/imgs/placeImage1.png";
import Place2 from "../public/imgs/placeImage2.png";
import Place3 from "../public/imgs/placeImage3.png";
import Place4 from "../public/imgs/placeImage4.png";
import Places from "./Components/Places";
import Hotel1 from "../public/imgs/hotel1.png";
import Hotel2 from "../public/imgs/hotel2.png";
import Hotel3 from "../public/imgs/hotel3.png";
import Hotels from "./Components/Hotels";
import Testimonials from "./Components/Testimonials";
import Offers from "./Components/Offers";
import Service1 from "../public/imgs/service1.png";
import Service2 from "../public/imgs/service2.png";
import Service3 from "../public/imgs/service3.png";

const Home = () => {
  return (
    <div className=" bg-lightGray">
      {/* Landing Page Section */}
      <div className="flex flex-col items-center justify-center space-y-3 bg-hero-pattern h-[95vh] bg-cover bg-center bg-no-repeat relative text-white">
        <h1 className="font-bold text-4xl lg:text-7xl tracking-[5px]">
          Travel Buddy
        </h1>
        <p className="w-[65%] text-center text-sm lg:w-full lg:text-[16px]">
          Let's start your journey with us, your dream will come true
        </p>
        <div className=" pt-2 lg:pt-3">
          <button className="bg-orange py-3 px-6 lg:px-6 text-white text-xs font-thin">
            Discover Now
          </button>
        </div>
        <div className="hidden lg:flex bg-white p-2 text-lightBlue absolute bottom-[-70px]">
          <TabNavigation />
        </div>
      </div>
      {/* End */}

      {/* Top Places Section */}
      <div className="flex flex-col pt-[130px] p-5">
        <div className="flex flex-col text-center justify-center space-y-2 pb-5">
          <h2 className="font-bold text-2xl text-blue tracking-widest">
            Top Places to visit
          </h2>
          <p className="text-xs text-gray2">
            The Best Place to Stay in Indonesia
          </p>
        </div>
        <div className="space-y-5 lg:space-y-0 flex flex-wrap justify-center ">
          <Image src={Place1} alt="#" className="lg:w-[45%]  lg:py-3 lg:px-3" />
          <Image src={Place2} alt="#" className="lg:w-[45%] lg:py-3 lg:px-3" />
          <Image src={Place3} alt="#" className="lg:w-[45%] lg:py-3 lg:px-3" />
          <Image src={Place4} alt="#" className="lg:w-[45%] lg:py-3 lg:px-3" />
        </div>
        <div className="flex justify-center py-[30px]">
          <button className="bg-orange py-3 px-6 lg:px-6 text-white text-xs font-thin">
            Discover Now
          </button>
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
      </div>
      {/* Top Places Section End */}

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

      {/* Testimonials */}
      <div className="bg-blue text-white space-y-6 flex flex-col items-center md:items-start pb-10 p-5 lg:justify-center">
        <div className="flex justify-between w-full ">
          <p className="font-semibold tracking-wide">What They Said</p>
        </div>
        <div className="flex flex-wrap space-y-5 lg:space-y-0 items-center lg:justify-between">
          <Testimonials
            description="Our vacation was flawless thanks to this site! The curated itineraries and easy navigation made 
            planning a breeze. Truly a traveler's best companion for any trip."
            name="-Chari"
          />
          <Testimonials
            description="Our vacation was flawless thanks to this site! The curated itineraries and easy navigation made 
            planning a breeze. Truly a traveler's best companion for any trip."
            name="-Chari"
          />
          <Testimonials
            description="Our vacation was flawless thanks to this site! The curated itineraries and easy navigation made 
            planning a breeze. Truly a traveler's best companion for any trip."
            name="-Chari"
          />
          {/* <Testimonials
            description="Booking our dream vacation was seamless and stress-free. The detailed guides and insider 
            tips made our trip unforgettable. Highly recommend for any seeking adventure!"
            name="-Billy"
          />
          <Testimonials
            description="An exceptional travel experience from start to finish! The personalized recommendations and easy 
          booking process made our getaway perfect. Will definitely use this service again!"
            name="-Vicki"
          /> */}
        </div>
      </div>
      {/* Testimonials End */}

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

export default Home;
