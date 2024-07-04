"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "It is a fantastic theme with tons of design and layout options, and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Natasha",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "/image/profile1.jpg",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "It is a fantastic theme with tons of design and layout options, and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Sadie Goodman",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "/image/profile2.jpg",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "It is a fantastic theme with tons of design and layout options, and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small.",
    date: "Mar 16, 2024",
    datetime: "2024-03-16",
    category: { title: "4.7", href: "#" },
    author: {
      name: "Harvey Weber",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "/image/profile3.jpg",
    },
  },
];

const Contact = () => {
  return (
    <div className="pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Customer Reviews
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="mt-2 text-lg leading-8 text-muted-foreground"
        >
          Learn how to grow your business with our expert advice.
        </motion.p>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-16 border-b border-t border-gray-200 py-10 sm:mt-16 sm:py-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime}>
                  <Image src="/image/star.svg" alt="" width={80} height={5} />
                </time>
                <Link
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-primary px-3 py-1.5 font-medium text-white transition-all hover:bg-gray-100 hover:text-black"
                >
                  {post.category.title}
                </Link>
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                  <Link href={post.href}>
                    <span className="">{post.title}</span>
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {post.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  src={post.author.imageUrl}
                  alt=""
                  width={50}
                  height={50}
                  className="size-10 rounded-full bg-gray-500"
                />
                <div className="text-sm leading-6">
                  <p>
                    <Link href={post.author.href}>
                      <span>{post.author.name}</span>
                    </Link>
                  </p>
                  <p className="text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
