"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const About = () => {
  return (
    <div className="container h-auto py-12 xl:pt-24">
      <div className="grid place-items-center gap-4 lg:grid-cols-2">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          <Image
            src="/image/aboutfront.png"
            alt="about"
            width={900}
            height={500}
            className="max-md:hiddenF"
          />
        </motion.div>

        <div className="items-center">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl"
          >
            We are awards Winning Company
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="mt-3 px-12 uppercase tracking-wider text-gray-400"
          >
            World Award
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="mt-4 px-12 pb-4"
          >
            This is a company engaged in the field of interior design. We
            provide the best interior design for your home. We have been trusted
            by many people to design their homes. We have also received many
            awards from various countries for our work.
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4"
          >
            This is a company engaged in the field of interior design. We
            provide the best interior design for your home. We have been trusted
            by many people to design their homes. We have also received many
            awards from various countries for our work.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
