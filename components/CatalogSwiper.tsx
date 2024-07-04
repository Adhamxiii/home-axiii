"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

import "swiper/css";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const CatalogSwiper = () => {
  return (
    <div className="py-8 lg:py-28">
      <div className="container grid pb-8 lg:grid-cols-1">
        <div className="text-left">
          <motion.h1
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="py-4 text-4xl font-medium lg:py-0 lg:text-6xl"
          >
            Modern Classic
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="mt-5 pb-6 text-xl font-bold tracking-wider"
          >
            LUXURY DECOR TO CREATE COMFORT IN OUR HOME
          </motion.h2>
        </div>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="grid grid-cols-2 gap-x-8 text-gray-500"
        >
          <p>
            With our passion for design and decor, we have created a collection
            of furniture and accessories that will help you create a comfortable
            and stylish home. With our passion for design and decor, we have
            created a collection of furniture and accessories that will help you
            create a comfortable and stylish home.
          </p>
          <p>
            With our passion for design and decor, we have created a collection
            of furniture and accessories that will help you create a comfortable
            and stylish home. With our passion for design and decor, we have
            created a collection of furniture and accessories that will help you
            create a comfortable and stylish home.
          </p>
        </motion.div>

        <Link href="/gallery">
          <Button className="mt-4 inline-flex items-center rounded-full px-8 py-3 text-white shadow-lg ring-offset-2 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950">
            View Gallery <TbArrowUpRight className="ml-2 size-5" />
          </Button>
        </Link>
      </div>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src="/image/swiper1.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper2.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper3.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper4.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper5.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper6.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper7.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/swiper8.jpg"
            alt="Swiper"
            width={520}
            height={220}
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CatalogSwiper;
