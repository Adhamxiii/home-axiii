import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import Nav from "./Nav";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col items-center justify-start gap-y-32 py-8">
        <SheetHeader>
          <Logo />
        </SheetHeader>
        <div>
          <Nav
            containerStyles="flex flex-col items-center gap-y-6"
            linkStyles="text-xl font-semibold"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
