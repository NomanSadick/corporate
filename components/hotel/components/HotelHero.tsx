"use client";

import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaUser,
  FaCalendarAlt,
} from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import Image from "next/image";
import {
  HotelSearchFormData,
  hotelSearchSchema,
} from "@/app/validation/hotelSearchSchema";

// Mock locations
const mockLocations = [
  { city: "Bangkok", country: "Thailand" },
  { city: "Phuket", country: "Thailand" },
  { city: "Tokyo", country: "Japan" },
  { city: "Singapore", country: "Singapore" },
];

const HotelHero = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<HotelSearchFormData>({
    resolver: zodResolver(hotelSearchSchema),
  });

  const [locationQuery, setLocationQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(mockLocations);
  const [showDropdown, setShowDropdown] = useState(false);
  const [locationSelected, setLocationSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Date and guest states
  const [selectedCheckIn, setSelectedCheckIn] = useState<{
    date: string;
    day: string;
  } | null>(null);
  const [selectedCheckOut, setSelectedCheckOut] = useState<{
    date: string;
    day: string;
  } | null>(null);

  // Helper function to get day of week
  const getDayOfWeek = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  // Handle date selection
  const handleDateChange = (type: "checkIn" | "checkOut", value: string) => {
    if (value) {
      const formattedDate = formatDate(value);
      const dayOfWeek = getDayOfWeek(value);

      if (type === "checkIn") {
        setSelectedCheckIn({ date: formattedDate, day: dayOfWeek });
        setValue("checkIn", value);
      } else {
        setSelectedCheckOut({ date: formattedDate, day: dayOfWeek });
        setValue("checkOut", value);
      }
    }
  };

  useEffect(() => {
    if (locationQuery.trim() === "") {
      setFilteredLocations(mockLocations);
      setSelectedIndex(-1);
    } else {
      const filtered = mockLocations.filter((location) =>
        `${location.city}, ${location.country}`
          .toLowerCase()
          .includes(locationQuery.toLowerCase())
      );
      setFilteredLocations(filtered);
      setSelectedIndex(-1);
    }
  }, [locationQuery]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocationSelect = (location: {
    city: string;
    country: string;
  }) => {
    const selected = `${location.city}, ${location.country}`;
    setLocationQuery(selected);
    setValue("location", selected);
    setShowDropdown(false);
    setLocationSelected(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredLocations.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(
        (prev) =>
          (prev - 1 + filteredLocations.length) % filteredLocations.length
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < filteredLocations.length) {
        handleLocationSelect(filteredLocations[selectedIndex]);
      }
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  const onSubmit = (data: HotelSearchFormData) => {
    console.log("Form submitted data:", data);
  };

  return (
    <div className="container-custom">
      <div className="bg-[url('/images/map.png')] bg-no-repeat bg-contain bg-center h-auto md:h-[522px] pt-20 pb-10">
        {/* Headings */}
        <div className="text-black text-center space-y-4 mb-6">
          <p className="text-3xl md:text-5xl font-bold">
            Your perfect <span className="text-[#146B83]">stay</span> awaits!
          </p>
          <p className="text-md">
            Find incredible prices on hotels, apartments, and unique
            accommodations.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-6xl mx-auto bg-white border border-[#146B83] rounded-md shadow-md px-4 py-8 flex flex-col md:flex-row items-center gap-3"
        >
          {/* Location with Autocomplete */}
          <div className="relative w-full md:w-1/5" ref={dropdownRef}>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 gap-2 min-h-[48px]">
              <FaMapMarkerAlt className="text-gray-500 text-sm flex-shrink-0" />

              <div className="flex-1">
                {locationQuery && locationQuery.includes(",") ? (
                  // Selected location display - now clickable to edit
                  <div
                    className="flex flex-col cursor-pointer border-l-2 border-red-300 px-2"
                    onClick={() => {
                      setLocationQuery("");
                      setValue("location", "");
                      setShowDropdown(true);
                      inputRef.current?.focus();
                      setLocationSelected(false);
                    }}
                  >
                    <span className="text-xs text-gray-400 leading-tight">
                      City/Hotel/Resort/Area
                    </span>
                    <span className="text-sm font-medium text-gray-900 leading-tight">
                      {locationQuery.split(",")[0].trim()}
                    </span>
                    <span className="text-xs text-gray-500 leading-tight">
                      {locationQuery.split(",")[1]?.trim()}
                    </span>
                  </div>
                ) : (
                  // Input field
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="City/Hotel/Resort/Area"
                    value={locationQuery}
                    {...register("location")}
                    onChange={(e) => {
                      setLocationQuery(e.target.value);
                      setLocationSelected(false);
                      setValue("location", "");
                    }}
                    onFocus={() => setShowDropdown(true)}
                    onKeyDown={handleKeyDown}
                    className="w-full md:w-[180px] px-0 py-1 text-sm focus:outline-none bg-transparent"
                    autoComplete="off"
                  />
                )}
              </div>
            </div>

            {/* Location Dropdown */}
            {showDropdown &&
              filteredLocations.length > 0 &&
              !locationQuery.includes(",") && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto mt-1">
                  {filteredLocations.map((location, index) => (
                    <div
                      key={`${location.city}-${location.country}`}
                      className={`flex items-center px-3 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${
                        index === selectedIndex ? "bg-blue-50" : ""
                      }`}
                      onClick={() => handleLocationSelect(location)}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      <FaMapMarkerAlt className="text-gray-400 text-sm mr-3 flex-shrink-0" />

                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">
                          {location.city}
                        </span>
                        <span className="text-xs text-gray-500">
                          {location.country}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>

          {/* Check-in */}
          <div className="flex items-center w-full md:w-1/5 border border-gray-300 rounded-md px-3 py-2 gap-2 min-h-[48px]">
            <FaCalendarAlt className="text-gray-500 text-sm flex-shrink-0" />
            <div className="flex-1">
              {selectedCheckIn ? (
                // Selected date display
                <div
                  className="flex flex-col cursor-pointer border-l-2 border-red-300 px-2"
                  onClick={() => setSelectedCheckIn(null)}
                >
                  <span className="text-xs text-gray-400 leading-tight">
                    Check-in Date
                  </span>
                  <span className="text-sm font-medium text-gray-900 leading-tight">
                    {selectedCheckIn.date}
                  </span>
                  <span className="text-xs text-gray-500 leading-tight">
                    {selectedCheckIn.day}
                  </span>
                </div>
              ) : (
                // Input field
                <input
                  type="date"
                  placeholder="Check-in Date"
                  {...register("checkIn")}
                  onChange={(e) => handleDateChange("checkIn", e.target.value)}
                  className="w-full md:w-[150px] px-0 py-1 text-sm focus:outline-none bg-transparent"
                />
              )}
            </div>
          </div>

          {/* Check-out */}
          <div className="flex items-center w-full md:w-1/5 border border-gray-300 rounded-md px-3 py-2 gap-2 min-h-[48px]">
            <FaCalendarAlt className="text-gray-500 text-sm flex-shrink-0" />
            <div className="flex-1">
              {selectedCheckOut ? (
                // Selected date display
                <div
                  className="flex flex-col cursor-pointer border-l-2 border-red-300 px-2"
                  onClick={() => setSelectedCheckOut(null)}
                >
                  <span className="text-xs text-gray-400 leading-tight">
                    Check-out Date
                  </span>
                  <span className="text-sm font-medium text-gray-900 leading-tight">
                    {selectedCheckOut.date}
                  </span>
                  <span className="text-xs text-gray-500 leading-tight">
                    {selectedCheckOut.day}
                  </span>
                </div>
              ) : (
                // Input field
                <input
                  type="date"
                  placeholder="Check-out Date"
                  {...register("checkOut")}
                  onChange={(e) => handleDateChange("checkOut", e.target.value)}
                  className="w-full md:w-[150px] px-0 py-1 text-sm focus:outline-none bg-transparent"
                />
              )}
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center w-full md:w-auto border border-gray-300 rounded-md px-3 py-2 gap-2">
            <FaUser className="text-gray-500 text-sm mt-1" />
            <input
              type="text"
              placeholder="No of Travelers"
              {...register("guests")}
              disabled={!locationSelected}
              className="w-full md:w-[160px] px-2 py-1 rounded-md text-sm focus:outline-none disabled:opacity-50"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!locationSelected}
            className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-3 rounded-md h-full flex items-center justify-center disabled:opacity-60"
          >
            <FaSearch className="text-white text-lg" />
          </button>
        </form>

        {/* Popup Image */}
        <div className="mt-16 flex justify-center">
          <Image
            src="/images/hotelPopUp.png"
            alt="hotel popup"
            width={172}
            height={151}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelHero;
