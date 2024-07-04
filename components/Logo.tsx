import { cn } from "@/lib/utils";
import { Ultra } from "next/font/google";
import Link from "next/link";

const ultra = Ultra({ subsets: ["latin"], weight: "400" });

const Logo = () => {
  return (
    <Link href="/">
      <p className={cn("text-4xl text-[#e6733d]", ultra.className)}>
        HOME AXIII
      </p>
    </Link>
  );
};

export default Logo;
