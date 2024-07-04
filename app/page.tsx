import About from "@/components/About";
import CatalogSwiper from "@/components/CatalogSwiper";
import Catalogue from "@/components/Catalogue";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Company />
      <About />
      <Catalogue />
      <CatalogSwiper />
      <Contact />
    </>
  );
}
