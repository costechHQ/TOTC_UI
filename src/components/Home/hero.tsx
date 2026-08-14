import React from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
   
    <section className="relative w-full overflow-hidden lg:h-[calc(100vh-40px)] lg:px-32 bg-[#49BBBD] pb-0 lg:pb-0">

      
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 pt-8 sm:px-8 md:py-10 lg:flex-row lg:gap-6 lg:py-0">

        {/* ================= LEFT ================= */}
        <div className="flex w-full flex-1 flex-col items-center justify-center text-center lg:items-start lg:text-left">

          <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[52px] xl:text-[58px]">
            <span className="text-[#F48C06]">Studying </span>Online is now much easier
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg lg:text-lg">
            TOTC is an interesting platform that will teach you in a more
            interactive way.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">

            <button className="btn-ghost-totc whitespace-nowrap">
              Join For free
            </button>

            <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-0 bg-white shadow-md">
              <FaPlay
                size={14}
                className="ml-1 text-[#49C5D6]"
              />
            </button>

            <span className="whitespace-nowrap text-sm text-gray-900 sm:text-base">
              Watch how it works
            </span>

          </div>
        </div>

       {/* ================= RIGHT ================= */}
<div className="relative flex w-full flex-1 items-center justify-center mt-auto lg:mt-0">
  {/* Clamping the max-width on xl and 2xl screens prevents the student and badges from drifting apart */}
  <div className="relative w-full max-w-95 xl:max-w-[480px] 2xl:max-w-[540px]">

    <Image
      src="/images/hero-img.png"
      alt="Hero Student"
      width={560}
      height={560}
      priority
      className="relative mx-auto h-auto w-full block"
    />

    {/* Adjust position slightly for extra large screens if needed */}
    <Image
      src="/images/stats.png"
      alt="Hero Floating Cards"
      width={540}
      height={300}
      priority
      className="absolute left-3.75 top-[25%] xl:top-[22%] z-30 hidden w-full lg:block"
    />
    
  </div>
</div>

      </div>

      {/* ================= BOTTOM CURVE ================= */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 pointer-events-none z-10">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-10 sm:h-15 md:h-20 lg:h-25"
        >
          <path 
            d="M0,40 Q720,160 1440,40 L1440,120 L0,120 Z" 
            fill="#ffffff"
          />
        </svg>
      </div>

    </section>
  );
};

export default Hero;
