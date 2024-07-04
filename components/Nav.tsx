import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}

const Nav = ({ containerStyles, linkStyles, underlineStyles }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, i) => (
        <Link key={i} href={link.href} className={`uppercase ${linkStyles}`}>
          {link.href === pathname && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
