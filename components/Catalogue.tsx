import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";

const Catalogue = () => {
  const items = [
    {
      id: "01",
      category: "BEDROOM SETUP",
      title: "Cossy Bedroom Setup",
      image: "/image/badroom.jpg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
      id: "02",
      category: "KITCHEN SETUP",
      title: "Neat & Clean Kitchen",
      image: "/image/kitchen1.jpg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
      id: "03",
      category: "DROWNING SETUP",
      title: "Family Drowing Room",
      image: "/image/drowing.jpg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
      id: "04",
      category: "LIVING SETUP",
      title: "Clean Family Room",
      image: "/image/living.jpg",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
  ];
  return (
    <div className="grid gap-8 divide-gray-300 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x">
      {items.map((item) => (
        <div key={item.id} className="group relative overflow-hidden">
          <div>
            <Image
              src={item.image}
              alt=""
              width={380}
              height={100}
              className="w-full"
            />
          </div>

          <div className="absolute top-0 m-12 bg-white bg-opacity-60 p-8 text-black backdrop-blur">
            <div className="flex justify-between pb-4">
              <p className="text-sm">{item.category}</p>
              <span className="text-sm">{item.id}</span>
            </div>
            <Link href="href" className="block text-xl font-semibold">
              {item.title}
            </Link>
            <p className="py-4">{item.description}</p>
            <Link href="href" className="inline-flex items-center font-medium">
              See Details <TbArrowNarrowRight className="ml-2" />
            </Link>
          </div>

          <div className="inset-0 flex-col items-center justify-end gap-32 border-b-2 bg-tertiary pb-16 text-xl transition duration-300 ease-in-out group-hover:translate-y-full md:absolute md:flex md:border-b-0">
            <p className="-rotate-90 tracking-wider">{item.category}</p>
            <span>{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalogue;
