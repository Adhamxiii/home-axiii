"use client";

import React from "react";
import { Button } from "./ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const Hero = () => {
  return (
    <div className="container h-auto gap-4 py-12 text-center lg:flex lg:justify-between lg:py-0 lg:text-left xl:py-24">
      <div className="lg:w-1/2 lg:py-8 xl:py-14">
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="uppercase tracking-widest"
        >
          Offer for the best Interior
        </motion.p>
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="h1"
        >
          Make your a <br />
          piece of art
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="pb-6 text-muted-foreground xl:pb-10"
        >
          Change your view with the best interior design. We provide the best
          interior design for your Home. Make every moment beautiful with the
          best interior design. Change your view with the best interior design.
          We provide the best interior design for your Home. Make every moment
          beautiful with the best interior design.
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
        >
          <Button className="inline-flex items-center rounded-full px-8 py-3 text-white shadow-lg ring-offset-2 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950">
            Book now
            <TbArrowUpRight className="ml-2 size-5" />
          </Button>
        </motion.div>
      </div>

      <div className="w-1/2">
        <Image
          src="/image/hall.png"
          alt=""
          width={800}
          height={500}
          className="hidden lg:block lg:h-[344px] lg:w-[500px] xl:h-[448px] xl:w-[700px]"
        />
      </div>
    </div>
  );
};

export default Hero;
