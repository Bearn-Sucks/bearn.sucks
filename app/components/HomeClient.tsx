"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

function HardestShadow({ className, children }: { className: string, children: React.ReactNode }) {
  return <div className="relative flex whitespace-nowrap">
    <div className={`absolute -bottom-1 left-1 !text-black drop-shadow-lg ${className}`}>
      {children}
    </div>
    <div className={`drop-shadow-lg ${className}`}>
      {children}
    </div>
  </div>;
}

export default function HomeClient({ initialSlide }: { initialSlide: number }) {
  const [slideNumber, setSlideNumber] = useState(initialSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideNumber((current) => (current === 4 ? 1 : current + 1));
    }, 6000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image
        src={`/slides/${slideNumber}.jpg`}
        alt="Background image"
        fill
        className="object-cover z-[-1]"
        priority
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8">
        <div className="relative flex items-center">
          <HardestShadow className="text-amber-400 text-6xl sm:text-8xl">BEARN SUCKS</HardestShadow>
        </div>
        <div className="flex items-center justify-center gap-8">
          <div className="p-6 font-mono relative flex gap-3 items-center justify-center backdrop-blur-md rounded-full">
            <div className="hidden sm:block text-2xl">🐻</div>
            <div className="flex flex-col gap-3">
              <HardestShadow className="-bottom-[2px] left-[2px] text-amber-300 text-sm sm:text-2xl">Bearn still undah construckshun</HardestShadow>
              <HardestShadow className="-bottom-[2px] left-[2px] text-amber-300 text-sm sm:text-2xl hover:underline">
                <a href="https://x.com/Bearnsucks" target="_blank" rel="noopener noreferrer">Folla on Twitter foor moarrrrr!!</a>
              </HardestShadow>              
            </div>
            <div className="hidden sm:block text-2xl">🐻</div>
          </div>
        </div>
      </div>
    </div>
  );
} 