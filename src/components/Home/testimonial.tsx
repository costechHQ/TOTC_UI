import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";



const Testimonial = () => {
  return (
    <>
      {/* ================= TESTIMONIAL ================= */}
      <section className="bg-[#FFFFFF] px-5 py-16 sm:px-8 md:py-20 lg:px-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row md:gap-16">
          
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <div className="flex-1 text-left max-w-xl">
            {/* Header Row Line indicator */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-px bg-[#696984]/40" />
              <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-[#696984]">
                TESTIMONIAL
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2F327D] md:text-[40px] leading-tight">
              What They Say?
            </h2>

            <div className="mt-6 space-y-5 text-[15px] font-normal leading-relaxed text-[#696984]">
              <p>
                TOTC has got more than 100k positive ratings from our users around the world.
              </p>
              <p>
                Some of the students and teachers were greatly helped by the Skilline.
              </p>
              <p className="pt-2">
                Are you too? Please give your assessment
              </p>
            </div>

            {/* Styled Action Assessment Button */}
            <button className="mt-8 group inline-flex items-center justify-between rounded-full border border-[#49BBBD] pl-6 pr-2 py-2 text-sm font-medium text-[#49BBBD] transition-all hover:bg-[#49BBBD]/5 w-full max-w-65">
              <span className="text-[14px]">Write your assessment</span>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#49BBBD] text-[#49BBBD]">
                <FiArrowRight size={16} />
              </div>
            </button>
          </div>

          {/* ================= RIGHT================= */}
          <div className="relative flex-1 w-full max-w-120 md:max-w-none flex justify-center md:justify-end pr-0 md:pr-12 pb-16 md:pb-0">
            
            {/* Core User Base Backdrop Photo Frame */}
            <div className="relative w-85 h-95 sm:w-95 sm:h-105 rounded-2xl overflow-hidden shadow-sm bg-[#A0D2EB]">
              <Image
                src="/images/girl.png" 
                alt="Student"
                fill
                priority
                className="object-cover object-center"
              />
              
              {/*Slide Next Pointer Button */}
              <button className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#49BBBD] shadow-md border border-gray-100 hover:scale-105 transition-transform z-20">
                <FiArrowRight size={18} />
              </button>
            </div>

            {/* Floating Absolute Positioned Testimonial Box */}
            <div className="absolute -bottom-8 sm:left-4 lg:ml-56  md:left-7.5 lg:left-0 xl:left-8 z-30 w-full max-w-85 sm:max-w-95 rounded-2xl bg-white p-6 shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-gray-100/50 flex flex-col justify-between min-h-50">
              {/* Left Accent Color Indicator Strip */}
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-[#EF7E7E] rounded-r-md" />
              
              {/* Message block */}
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#696984] pl-2 font-normal text-left">
                &quot;Thank you so much for your help. It&apos;s exactly what I&apos;ve been looking for. You won&apos;t regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.&quot;
              </p>

              <div className="mt-5 pl-2 flex items-end justify-between border-t border-gray-50 pt-4">
                <div>
                  <p className="text-[15px] font-bold text-[#2F327D] text-left">
                    Gloria Rose
                  </p>
                </div>
                <div className="text-right">
                  {/* Dynamic Rating Stars Layout */}
                  <div className="flex items-center justify-end gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[13px] text-[#FFB014]" />
                    ))}
                  </div>
                  <span className="block mt-1 text-[10px] font-medium tracking-wide text-[#A1A1B5]">
                    12 reviews at Yelp
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Testimonial;
