"use client";

import Image from "next/image";
import { FaPhone } from "react-icons/fa";

const FreeTravel = () => {
  return (
    <div className="bg-gradient-to-br from-[#13133C] via-cyan-700  to-[#146B83] text-white mt-16">
      <section className="relative text-center container-custom overflow-hidden">
        {/* Background Circle */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-10 w-[462px] h-[462px] bg-[#0C657D] rounded-full z-0"></div>

        {/* Content */}
        <div className="relative z-10 mt-10 ">
          <h1 className="text-3xl sm:text-5xl font-semibold">
            Free Travel Advice. Custom Trips.
          </h1>
           <p className="text-2xl mt-6">Travel, Your Way!</p>
          <div className="absolute top-16 right-[40%] ">

            <Image
              src="/images/star.png"
              alt="Hotel Icon"
              width={20}
              height={20} 
            />

          </div>

          {/* Buttons */}
          <div className=" flex justify-center gap-4 flex-wrap mt-20">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold">
              Get Customized Trip
            </button>

            <button className="border border-orange-500 bg-[#065D76] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-orange-600 transition">
              <FaPhone />
              Get Free Consultancy
            </button>
          </div>

          {/* Decorative Icons BELOW Buttons */}
          <div className="flex justify-between items-center">
            <Image
              src="/images/material-symbols_flights-and-hotels.png"
              alt="Hotel Icon"
              width={98}
              height={112}
            />
            <Image
              src="/images/Group (1).png"
              alt="Plane Icon"
              width={98}
              height={112}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeTravel;
