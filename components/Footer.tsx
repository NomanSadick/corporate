"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaChevronUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#042D3D] text-white py-10 px-6 md:px-10 lg:px-16 border-t border-gray-600 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={500}
              height={300}
              className="object-cover w-[50%] sm:w-[40%] md:w-[40%]"
            />
            <span className="text-sm mt-2 block">Travel, your way!</span>
            <p className="text-sm text-gray-300 leading-relaxed w-[80%] text-justify">
              TripNest simplifies travel planning, turning trips into
              personalized experiences. Founded by travel enthusiasts, we aim to
              make every journey enjoyable and stress-free for Bangladeshi
              tourists.
            </p>
          </div>

          {/* Our Company */}
          <div className="grid grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="justify-self-end md:justify-self-center">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    All Packages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Visa Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pl-0 md:pl-8">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <MdLocationOn className="flex-shrink-0 mt-1" />
                <span className="w-[80%]">
                  House 20, Road 32 (Old)/41 (New), Dhanmondi, Dhaka-1209
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MdEmail className="flex-shrink-0 mt-1" />
                <span>support@tripnest.net</span>
              </li>
              <li className="flex items-start gap-2">
                <MdPhone className="flex-shrink-0 mt-1" />
                <span>09666-771109</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <Link
                href="#"
                className="bg-orange-400 p-2 rounded-full hover:bg-orange-500 transition-colors"
              >
                <FaFacebookF size={16} className="text-white" />
              </Link>
              <Link
                href="#"
                className="bg-orange-400 p-2 rounded-full hover:bg-orange-500 transition-colors"
              >
                <FaInstagram size={16} className="text-white" />
              </Link>
              <Link
                href="#"
                className="bg-orange-400 p-2 rounded-full hover:bg-orange-500 transition-colors"
              >
                <FaLinkedinIn size={16} className="text-white" />
              </Link>
              <Link
                href="#"
                className="bg-orange-400 p-2 rounded-full hover:bg-orange-500 transition-colors"
              >
                <FaYoutube size={16} className="text-white" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg p-1 ">
          <Image
            src="/images/footer-1.svg"
            alt="footer"
            width={500}
            height={500}
            className="object-cover mx-auto w-full h-auto"
          />
        </div>

        <div className="mt-8 pt-4 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between text-gray-400 text-sm">
          <p>&copy; 2025 All Rights Reserved</p>
          <div className="flex items-center">
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of use
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Refunds and Returns
              </Link>
            </div>
            <button
              onClick={scrollToTop}
              className="ml-8 bg-white hover:bg-gray-100 text-gray-600 p-2 rounded-full transition-all duration-300 hover:scale-110 "
            >
              <FaChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}