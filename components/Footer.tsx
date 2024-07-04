"use client";

import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const Footer = () => {
  return (
    <div className="bg-tertiary">
      <div className="container py-14 lg:grid lg:grid-cols-2">
        <div className="grid gap-4 pb-4 text-left lg:grid-cols-3 lg:pb-0">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase">Company</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                About Us
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Press
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Careers
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Contact
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase">
              Development
            </h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                Documentation
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Reference
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Changelog
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Status
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
          >
            <h2 className="pb-4 text-xl font-semibold uppercase">Connect</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                Instagram
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Twitter
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Linkedin
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Facebook
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          <p className="pb-4 text-xl font-semibold">Stay Updated</p>
          <div className="relative lg:max-w-sm">
            <Input type="name" id="first name" placeholder="Email Address" />
            <button className="absolute right-2 top-2 h-10 rounded-full bg-black px-3 text-sm text-white hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-primary">
              Subscribe
            </button>
          </div>
          <p className="pt-4 text-gray-500">
            By subscribing to our newsletter, you agree to receive emails from
            us. Your personal data will be stored and processed in accordance in
            accordance with our Privacy Policy and you can unsubscribe at any
            time.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        className="bg-black py-10 dark:bg-primary"
      >
        <div className="container text-center text-white lg:flex lg:justify-between">
          <div className="pb-4 lg:pb-0">
            <p>
              &copy; {new Date().getFullYear()} Interior. All Rights Reserved
            </p>
          </div>
          <div>
            <Link href="/" className="p-4 hover:underline">
              Privacy
            </Link>
            <Link href="/" className="p-4 hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
