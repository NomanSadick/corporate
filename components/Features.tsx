"use client";

import { features } from "../app/data/features";

export default function Features() {
  return (
    <section className=" container-custom mt-12">
      <h2 className="text-[32px] leading-[40px] md:text-[64px] md:leading-[80px] font-semibold text-center mb-8 text-gray-950">
        What We Offer
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {features.map(
          ({ icon: Icon, title, desc, color, iconColor }, index) => (
            <div
              key={index}
              className="p-2 md:p-4 pt-2 sm:text-center border border-x-red-100 rounded-lg bg-white hover:shadow-md transition-shadow w-full blur-none"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center sm:mx-auto ${color}`}
              >
                <Icon className={`w-6 h-6 ${iconColor}`} />
              </div>
              <h3 className="text-[13px] tracking-tight leading-[15px] md:text-[24px] md:leading-[30px] font-semibold pt-2 text-gray-950 ">
                {title}
              </h3>
              <p className=" w-full text-[12px] tracking-tight leading-[16px] md:text-[16px] md:leading-[24px] pb-8 pt-2 font-semibold text-gray-700 ">
                {desc}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
