"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useRef } from "react";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { TbArrowUpRight } from "react-icons/tb";

const AboutPage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-cover bg-center">
        <h1 className="container py-32 text-center text-6xl font-semibold tracking-widest text-black lg:pt-64">
          Who are we?
        </h1>
      </div>

      <div className="container">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-center text-3xl font-semibold lg:p-10 lg:text-5xl"
          >
            We have great idea & Interior Design
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="mt-5 pb-10 text-center text-2xl font-medium"
          >
            Our interior design company is a company that provides interior
            design services for homes, offices, apartments, and others. We
            provide the best interior design services for you. We have a team
            that is experienced in the field of interior.
          </motion.p>
        </div>

        <div className="items-center gap-x-8 lg:flex">
          <motion.div style={{ scale }} ref={ref} className="w-full">
            <Image
              src="/image/gallery1123.jpg"
              alt=""
              width={700}
              height={700}
            />
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <p className="mt-6 pb-8 tracking-wide">
              We are an international Architects. We believe that today it is
              fundamental to totally rethink archi-tectural education.
              Confluence not only integrates new visions on society but also
              incorporates new methods and contemporary tools linked to
              creativity, production and communication. De-signed and
              handcrafted to hold and showcase my year two architecture
              portfolio, the unfolding box allows portfolio sheets... <br />
              <br />
              We are an international Architects. We believe that today it is
              fundamental to totally rethink archi-tectural education.
              Confluence not only integrates new visions on society but also
              incorporates new methods and contemporary tools linked to
              creativity, production and communication. De-signed and
              handcrafted to hold and showcase my year two architecture
              portfolio, the unfolding box allows portfolio sheets... <br />
              <br />
              <span className="text-xl font-extrabold tracking-tight">
                The backpiperARCH, we share a belief in the transformational
                power of people united in a common purpose.
              </span>
            </p>
            <Button className="inline-flex items-center px-8 py-3 shadow-lg ring-offset-2 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950">
              Read More <TbArrowUpRight className="ml-2 size-5" />
            </Button>
          </motion.div>
        </div>

        <div className="lg:py-20">
          <div className="pb-4 pt-8">
            <motion.h1
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="text-center text-4xl font-bold uppercase tracking-wider"
            >
              Team
            </motion.h1>
          </div>

          <div className="grid gap-20 py-8 lg:grid-cols-3">
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="border-2 border-primary"
            >
              <div className="-m-0.5 aspect-square bg-gray-100 p-4 text-center transition hover:-translate-x-3 hover:-translate-y-3 dark:bg-tertiary">
                <Image
                  src="/image/profile2.jpg"
                  alt=""
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Creativity is the ability to generate, create, ot discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              className="border-2 border-primary"
            >
              <div className="-m-0.5 aspect-square bg-gray-100 p-4 text-center transition hover:-translate-x-3 hover:-translate-y-3 dark:bg-tertiary">
                <Image
                  src="/image/profile1.jpg"
                  alt=""
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Creativity is the ability to generate, create, ot discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="border-2 border-primary"
            >
              <div className="-m-0.5 aspect-square bg-gray-100 p-4 text-center transition hover:-translate-x-3 hover:-translate-y-3 dark:bg-tertiary">
                <Image
                  src="/image/profile3.jpg"
                  alt=""
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
                <h2 className="py-4 text-2xl font-semibold uppercase">
                  Building Surveys
                </h2>
                <p className="text-sm">
                  Creativity is the ability to generate, create, ot discover new
                  ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
