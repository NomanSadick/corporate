"use client";

import { HiBriefcase, HiOutlinePhone } from "react-icons/hi";
import { useRouter } from "next/navigation"; // for App Router

// import { BsSend } from "react-icons/bs";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="bg-[linear-gradient(90deg,_#146B83_0%,_#1C627D_18%,_#2F4A6F_48%,_#0E1E44_84%)] text-white pt-10 pb-14 text-center">
      {/* <div className="bg-[url(/img/mountains.jpg)] ..."></div> */}
      <section className="container-custom">
        <div className="bg-[url(/images/Group.png)] bg-no-repeat bg-contain bg-center h-[250px] md:h-[350px]">
          <div className="inline-flex items-center gap-1 bg-[linear-gradient(90deg,_#FFFFFF_0%,_#999999_100%)] text-xs text-[#146B83] px-3 py-1 rounded-full border border-white/20 mb-4">
            <HiBriefcase size={14} />
            No 1 Corporate Travel Partner
          </div>

          <div className="font-semibold flex flex-col md:flex-row justify-center items-center text-[32px] md:text-[75px] ">
            <span>Corporate Travel,</span>
            <span>Tailored to You</span>
          </div>

          {/* Subtext */}
          <p className="text-[16px] leading-[24px] md:text-[24px] md:leading-[30px] text-white/80 mt-3 mx-auto">
            Customized plans, dedicated agents, exclusive deals — just how you want it.
          </p>

          {/* Buttons with icons */}
          <div className="mt-6 flex justify-center flex-wrap gap-4 md:gap-8">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 md:px-14 rounded-md text-sm"
            >
              Submit Your Query
            </button>
            <button className="flex items-center gap-2 bg-[#F5FDFF] border border-white/30 text-cyan-600 font-medium px-4 py-2 md:px-14 rounded-md hover:bg-white/20 text-sm">
              <HiOutlinePhone size={18} /> Free Consultancy
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
