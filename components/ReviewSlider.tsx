"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";
import { ReviewsData } from "@/app/data/ReviewData";

const ReviewSlider = () => {
  return (
    <div className="w-full mt-4">
      <div className="container-custom mx-auto">
        <h2 className="text-[32px] leading-[40px] md:text-[64px] md:leading-[80px] font-semibold text-center mb-8 text-gray-950">
          Customer <span className="text-[#146B83]">Review</span>
        </h2>

        <Marquee
          pauseOnHover
          gradient={true}
          gradientColor="white"
          gradientWidth={30}
          speed={30}
        >
          {ReviewsData.map((review) => (
            <div
              key={review.id}
              className="mx-3 min-w-[300px] max-w-[320px]"
            >
              <div className="bg-white rounded-lg p-6 h-full shadow-2xl">
                <FaQuoteLeft className="text-gray-100 text-4xl mb-2" />
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>

                <p className="text-[#1B1B1B] font-semibold">{review.review}</p>

                <div className="flex items-center mt-4">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-md border-2 border-blue-500"
                  />
                  <div className="ml-4">
                    <h3 className="font-bold text-sm">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ReviewSlider;
