"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="w-full overflow-x-hidden bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-12 xl:px-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-16">
        {/* ================= LEFT CONTENT ================= */}
        <div className="min-w-0 w-full max-w-xl flex-1 text-left">
          <div className="flex items-center gap-4">
            <div className="h-px w-14 shrink-0 bg-[#696984]/40" />

            <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-[#696984]">
              TESTIMONIAL
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#2F327D] md:text-[40px]">
            What They Say?
          </h2>

          <div className="mt-6 space-y-5 text-[15px] font-normal leading-relaxed text-[#696984]">
            <p>
              TOTC has got more than 100k positive ratings from our users
              around the world.
            </p>

            <p>
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>

            <p className="pt-2">
              Are you too? Please give your assessment
            </p>
          </div>

          <button className="group mt-8 inline-flex w-full max-w-[260px] items-center justify-between rounded-full border border-[#49BBBD] py-2 pl-6 pr-2 text-sm font-medium text-[#49BBBD] transition-all hover:bg-[#49BBBD]/5">
            <span className="text-[14px]">
              Write your assessment
            </span>

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#49BBBD] text-[#49BBBD]">
              <FiArrowRight size={16} />
            </div>
          </button>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative min-w-0 w-full max-w-[480px] flex-1 pb-24 md:pb-0">
          {/* Image */}
          <div className="relative mx-auto aspect-[340/380] w-[85%] max-w-[380px] overflow-hidden rounded-2xl bg-[#A0D2EB] shadow-sm md:mr-0">
            <Image
              src="/images/girl.png"
              alt="Student"
              fill
              priority
              className="object-cover object-center"
            />

            <button
              aria-label="Next testimonial"
              className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white text-[#49BBBD] shadow-md transition-transform hover:scale-105"
            >
              <FiArrowRight size={18} />
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="absolute bottom-0 left-1/2 z-30 w-[90%] max-w-[380px] -translate-x-1/2 rounded-2xl border border-gray-100/50 bg-white p-5 shadow-[0_15px_45px_rgba(0,0,0,0.06)] sm:p-6 md:left-[5%] md:translate-x-0">
            {/* Accent */}
            <div className="absolute bottom-6 left-0 top-6 w-1 rounded-r-md bg-[#EF7E7E]" />

            {/* Message */}
            <p className="pl-2 text-left text-[13px] font-normal leading-relaxed text-[#696984] sm:text-[14px]">
              &quot;Thank you so much for your help. It&apos;s exactly what
              I&apos;ve been looking for. You won&apos;t regret it. It really
              saves me time and effort. TOTC is exactly what our business has
              been lacking.&quot;
            </p>

            {/* Footer */}
            <div className="mt-5 flex items-end justify-between gap-4 border-t border-gray-50 pt-4 pl-2">
              <div className="min-w-0">
                <p className="truncate text-left text-[15px] font-bold text-[#2F327D]">
                  Gloria Rose
                </p>
              </div>

              <div className="shrink-0 text-right">
                <div className="flex items-center justify-end gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-[13px] text-[#FFB014]"
                    />
                  ))}
                </div>

                <span className="mt-1 block text-[10px] font-medium tracking-wide text-[#A1A1B5]">
                  12 reviews at Yelp
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;