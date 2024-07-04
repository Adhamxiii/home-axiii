"use client";

import { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalHeight) {
        setCompletion(Number(((currentScroll / totalHeight) * 100).toFixed(2)));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return completion;
};

export default useScrollProgress;
