"use client";

import React from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#49BBBD]">
      <div className="mx-auto flex min-h-[calc(100vh-40px)] w-full max-w-7xl flex-col items-center justify-center px-5 pt-8 sm:px-8 md:py-10 lg:flex-row lg:gap-8 lg:px-12 lg:py-0 xl:px-16">
        {/* ================= LEFT ================= */}
        <div className="flex min-w-0 w-full flex-1 flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <h1 className="w-full max-w-2xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[52px] xl:text-[58px]">
            <span className="text-[#F48C06]">Studying </span>
            Online is now much easier
          </h1>

          <p className="mt-4 w-full max-w-xl text-base leading-relaxed sm:text-lg lg:text-lg">
            TOTC is an interesting platform that will teach you in a more
            interactive way.
          </p>

          <div className="mt-6 flex max-w-full flex-wrap items-center justify-center gap-4 lg:justify-start">
            <button className="btn-ghost-totc whitespace-nowrap">
              Join For free
            </button>

            <button
              aria-label="Play video"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-0 bg-white shadow-md"
            >
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
        <div className="relative mt-8 flex min-w-0 w-full flex-1 items-end justify-center lg:mt-0">
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] xl:max-w-[500px]">
            <Image
              src="/images/hero-img.png"
              alt="Hero Student"
              width={560}
              height={560}
              priority
              className="relative mx-auto block h-auto w-full"
            />

            {/* Floating cards */}
            <Image
              src="/images/stats.png"
              alt="Hero Floating Cards"
              width={540}
              height={300}
              priority
              className="absolute left-[3%] top-[23%] z-30 hidden w-[94%] max-w-full lg:block"
            />
          </div>
        </div>
      </div>

      {/* ================= BOTTOM CURVE ================= */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="relative block h-10 w-full sm:h-14 md:h-20 lg:h-24"
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