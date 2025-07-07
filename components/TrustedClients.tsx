"use client";

import { trustedClients } from "@/app/data/trusted-clients";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function TrustedClients() {
  // Split clients into two arrays for two rows
  const firstRow = trustedClients.filter((_, i) => i % 2 === 0);
  const secondRow = trustedClients.filter((_, i) => i % 2 !== 0);

  return (
    <section>
      <div className="container-custom mx-auto mt-12">
        <h2 className="text-[32px] leading-[40px] md:text-[64px] md:leading-[80px] font-semibold text-center mb-8 text-gray-950">
          Our Trusted Clients
        </h2>

        {/* First row marquee */}
        <Marquee
          pauseOnHover={true}
          speed={30}
          gradient={true}
          gradientColor="white"
          gradientWidth={30}
          className="mb-4"
          direction="left"
        >
          {firstRow.map((client) => (
            <div
              key={client.id}
              className={`h-20 sm:h-24 px-4 md:px-8 flex items-center justify-center rounded-lg border ${client.bgColor} mx-1 md:mx-2`}
            >
              <Image
                src={client.image}
                alt={client.name}
                width={100}
                height={50}
                className="object-contain max-h-[40px] sm:max-h-[50px]"
              />
            </div>
          ))}
        </Marquee>

        {/* Second row marquee */}
        <Marquee
          pauseOnHover={true}
          speed={30}
          gradient={true}
          gradientColor="white"
          gradientWidth={30}
          direction="right"
        >
          {secondRow.map((client) => (
            <div
              key={client.id}
              className={`h-20 sm:h-24 px-4 md:px-8 flex items-center justify-center rounded-lg shadow border ${client.bgColor} mx-1 md:mx-2`}
            >
              <Image
                src={client.image}
                alt={client.name}
                width={100}
                height={50}
                className="object-contain max-h-[40px] sm:max-h-[50px]"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
