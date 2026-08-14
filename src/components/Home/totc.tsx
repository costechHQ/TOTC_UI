import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-center text-2xl font-bold text-[#2F327D] md:text-3xl lg:text-4xl">
    {children}
  </h2>
);

const SectionSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#696984] md:text-base">
    {children}
  </p>
);

const Totc = () => {
  return (
    <>
      {/* ================= WHAT IS TOTC? ================= */}
      <section className="bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle>
            What is <span className="text-[#49BBBD]">TOTC?</span>
          </SectionTitle>
          <SectionSubtitle>
            TOTC is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </SectionSubtitle>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14">
            {/* For Instructors */}
            <div className="group relative overflow-hidden rounded-3xl">
              <Image
                src="/images/lady-smiling.png"
                alt="For Instructors"
                width={600}
                height={400}
                className="h-70 w-full object-cover sm:h-80 md:h-95"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/20">
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  FOR INSTRUCTORS
                </h3>
                <button className="mt-4 rounded-full border-2 border-white px-6 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-[#2F327D]">
                  Start a class today
                </button>
              </div>
            </div>

            {/* For Students */}
            <div className="group relative overflow-hidden rounded-3xl">
              <Image
                src="/images/devs.png"
                alt="For Students"
                width={600}
                height={400}
                className="h-70 w-full object-cover sm:h-80 md:h-95"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/20">
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  FOR STUDENTS
                </h3>
                <button className="mt-4 rounded-full bg-[#49BBBD] px-6 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-[#49BBBD]">
                  Enter access code
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EVERYTHING YOU CAN DO ================= */}
      <section className="bg-white px-5 py-16 md:py-20 lg:px-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row md:gap-12 lg:gap-16">
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold leading-tight text-[#2F327D] md:text-3xl lg:text-[36px]">
              Everything you can do in a physical classroom,{" "}
              <span className="text-[#49BBBD]">you can do with TOTC</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#696984] md:text-base">
              TOTC&apos;s school management software helps traditional and
              online schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#696984] underline underline-offset-4 transition hover:text-[#49BBBD]"
            >
              Learn more
            </a>
          </div>

          {/* Right Image */}
          <div className="relative flex-1 ml-10">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/lecture.png"
                alt="Classroom"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
              <button className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:scale-105">
                <FaPlay className="ml-1 text-xl text-[#49BBBD]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </> // 3. FIXED: Removed the invalid dangling </div>
  );
};

export default Totc;
