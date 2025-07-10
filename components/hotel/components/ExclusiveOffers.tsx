"use client";

import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { TourCardData } from "@/app/data/TourCardData";
import { FaClock, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const ExclusiveOffers = () => {
  const sliderRef = useRef<Slider | null>(null);

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
    dotsClass: "custom-dots",
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 bg-orange-500 rounded-full transition duration-300" />
    ),
    responsive: [
      { breakpoint: 1536, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: false,
          centerMode: true,
          centerPadding: "16px",
        },
      },
    ],
  };

  return (
    <div className="container-custom mt-6">
      <div className="flex flex-col">
        {/* Title */}
        <h2 className="text-center mb-4">
          <span className="text-[#146B83] text-2xl md:text-5xl font-semibold">
            Exclusive
          </span>{" "}
          <span className="text-black text-2xl md:text-5xl font-semibold">
            Deals
          </span>
        </h2>

        {/* Tour Cards Slider */}
        <div className="relative">
          <Slider {...settings} ref={sliderRef}>
            {TourCardData.map((tour) => (
              <div key={tour.id} className="px-2">
                <div className="rounded-lg overflow-hidden border border-gray-200 shadow bg-white relative">
                  <Image
                    src={tour.image}
                    alt={tour.destination}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover rounded-lg"
                    style={{ objectFit: "cover" }}
                  />

                  {/* Rating */}
                  <div className="absolute top-3 left-2 flex items-center space-x-1 text-xs">
                    <span className="bg-[#146B83] text-white px-1 py-1 rounded-md">
                      {tour.rating}
                    </span>
                    <span className="text-white font-semibold">Excellent</span>
                  </div>

                  {/* Discount */}
                  {tour.discount && (
                    <div className="absolute top-3 right-3 bg-white pl-12 pr-2 py-1.5 rounded-full flex items-center shadow-md">
                      <span className="bg-[#146B83] text-white text-xs font-bold px-2 rounded-full absolute -left-3 w-14">
                        {tour.discount}
                      </span>
                      <span className="ml-0 text-gray-700 text-sm">
                        Discount
                      </span>
                    </div>
                  )}

                  <div className="p-4">
                    <h3 className="text-xl font-bold text-[#146B83]">
                      {tour.destination}
                    </h3>
                    <p className="flex items-center gap-1 text-sm text-[#146B83] mt-1">
                      <FaMapMarkerAlt className="text-[#146B83]" />
                      {tour.location}
                    </p>

                    <span className="flex items-center gap-1 text-[#146B83]">
                      <FaClock className="text-[#146B83]" /> {tour.duration}
                    </span>
                    <span className="flex items-center gap-1 text-[#146B83]">
                      <FaStar className="text-[#146B83]" /> {tour.star} Star
                    </span>

                    <div className="mt-2">
                      <span className="line-through decoration-red-600 text-[#146B83] text-sm mr-2">
                        {tour.currency} {(tour.price * 1.15).toLocaleString()}
                      </span>
                      <span className="text-[#146B83] text-lg font-bold">
                        {tour.currency} {tour.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Arrows for Desktop */}
          <IoIosArrowBack
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-8 z-50 w-7 h-7 bg-orange-500 p-2 rounded-full text-white cursor-pointer hidden md:block"
          />
          <IoIosArrowForward
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-8 z-50 w-7 h-7 bg-orange-500 p-2 rounded-full text-white cursor-pointer hidden md:block"
          />
        </div>

        {/* Arrows for Mobile */}
        <div className="flex justify-center items-center gap-x-4 mt-2 md:hidden">
          <IoIosArrowBack
            onClick={handlePrev}
            className="w-8 h-8 bg-orange-500 p-2 rounded-full text-white cursor-pointer"
          />
          <IoIosArrowForward
            onClick={handleNext}
            className="w-8 h-8 bg-orange-500 p-2 rounded-full text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffers;
