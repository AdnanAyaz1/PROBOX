"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "@/constants/index";

const Hero = () => {
  return (
    <div className="mx-auto mt-20 max-w-[1400px] px-4 max-h-[600px] overflow-hidden">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        className=" max-w-[1200px] mx-auto"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        swipeable={true}
        draggable={true}
      >
        <div className=" w-full  aspect-video">
          <Image
            src="/hp.jpg"
            alt="headphone-image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className=" w-full  aspect-video">
          <Image
            src="/pc.jpg"
            alt="laptop-image"
            fill 
            className="object-cover object-center rounded-lg"
          />
        </div>
        <div className=" w-full relative aspect-video">
          <Image
            src="/ry.jpg"
            alt="ryzen-image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </Carousel>
    </div>
      
  );
};

export default Hero;
