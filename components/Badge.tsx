"use client";

import React from "react";
import CountUp from "react-countup";

interface BadgeProps {
  containerStyles: string;
  endCountNum: number;
  endCountText: string;
}

const Badge = ({ containerStyles, endCountNum, endCountText }: BadgeProps) => {
  return (
    <div className={`${containerStyles}`}>
      <div className="flex items-center justify-center gap-x-2">
        <div className="text-4xl font-bold leading-none">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
