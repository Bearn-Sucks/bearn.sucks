"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [slideNumber, setSlideNumber] = useState(1);

  useEffect(() => {
    // Set up interval to change slide every 10 seconds
    const interval = setInterval(() => {
      setSlideNumber(Math.floor(Math.random() * 4) + 1);
    }, 6000);

    // Cleanup interval on component unmount
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
        <div className="relative flex items-center justify-end">
          <div className="absolute -bottom-1 -right-1 text-6xl sm:text-8xl text-black">BEARN SUCKS</div>
          <div className="text-6xl sm:text-8xl text-amber-400 drop-shadow-lg">BEARN SUCKS</div>
        </div>
        <div className="p-6 font-mono relative flex flex-col gap-3 items-center justify-center text-center bg-neutral-950/50 rounded-full">
          <p className="text-2xl sm:text-2xl text-amber-300 drop-shadow-lg">Bearn is still under construction.</p>
          <p className="text-2xl sm:text-2xl text-amber-300 drop-shadow-lg">
            <a href="https://x.com/Bearnsucks" target="_blank" rel="noopener noreferrer">Follow the twitter account for more updates.</a>
          </p>
        </div>
      </div>
    </div>
  );
}
