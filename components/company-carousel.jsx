"use client";

import React from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "@/data/companies";

const CompanyCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full py-10"
    >
      <CarouselContent className="text-white flex gap-5 sm:gap-20 items-center">
        {companies.map(({ name, id, path }) => (
          <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 text-white text-center flex flex-col items-center">
            <Image
              src={path}
              alt={name}
              width={150}
              height={150} 
              className="rounded-full object-cover" 
            />
            <p className="mt-4 text-xl font-semibold">{name}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CompanyCarousel;
