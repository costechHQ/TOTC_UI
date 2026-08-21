"use client";

import React from "react";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";

const SectionTitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-center text-2xl font-bold leading-tight text-[#2F327D] md:text-3xl lg:text-[36px] ${className}`}
  >
    {children}
  </h2>
);

const SectionSubtitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={`mx-auto mt-3 w-full max-w-2xl text-center text-sm leading-relaxed text-[#696984] md:text-base ${className}`}
  >
    {children}
  </p>
);

const Features = () => {
  return (
    <section className="w-full overflow-x-hidden bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-12 xl:px-32">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle>Our Features</SectionTitle>

        <SectionSubtitle>
          This very extraordinary feature, can make learning activities more
          efficient
        </SectionSubtitle>

        {/* ================= FEATURE 1 ================= */}
        <div className="mt-12 flex min-w-0 flex-col items-center gap-10 md:mt-16 md:flex-row md:gap-12">
          {/* Graphic */}
          <div className="min-w-0 w-full flex-1">
            <div className="relative mx-auto h-[300px] w-full max-w-[500px] sm:h-[340px]">
              <div className="absolute left-5 top-0 z-0 h-12 w-12 rounded-full bg-[#2FE5A2]" />

              <div className="absolute left-20 top-1 z-0 h-3 w-3 rounded-full bg-[#49C5D6]" />

              <div className="absolute left-[7%] top-5 z-10 h-[245px] w-[86%] overflow-hidden rounded-lg bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
                {/* Browser bar */}
                <div className="absolute left-0 top-0 flex h-7 w-full items-center gap-1.5 rounded-t-lg bg-[#F5F5F5] px-3">
                  <span className="h-2 w-2 rounded-full bg-[#FF6262]" />
                  <span className="h-2 w-2 rounded-full bg-[#FFCA5C]" />
                  <span className="h-2 w-2 rounded-full bg-[#4DD88A]" />
                </div>

                {/* Instructor */}
                <div className="absolute left-[7%] top-[16%] z-20 w-[38%] overflow-hidden rounded-xl">
                  <Image
                    src="/images/avatar 1.png"
                    alt="Instructor"
                    width={300}
                    height={300}
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Avatar 2 */}
                <div className="absolute left-[50%] top-[16%] z-20 w-[19%] overflow-hidden rounded-lg">
                  <Image
                    src="/images/avatar 2.png"
                    alt="User"
                    width={180}
                    height={180}
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Avatar 3 */}
                <div className="absolute right-[5%] top-[16%] z-20 w-[21%] overflow-hidden rounded-lg">
                  <Image
                    src="/images/avatar 3.png"
                    alt="User"
                    width={180}
                    height={180}
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Humbert Holland */}
                <div className="absolute left-[49%] top-[55%] z-30 w-[20%] overflow-hidden rounded-lg">
                  <Image
                    src="/images/avatar 4.png"
                    alt="Humbert Holland"
                    width={180}
                    height={180}
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Patricia Mendoza */}
                <div className="absolute right-[4%] top-[53%] z-30 w-[25%] overflow-hidden rounded-xl">
                  <Image
                    src="/images/avatar 5.png"
                    alt="Patricia Mendoza"
                    width={220}
                    height={220}
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Present */}
                <Image
                  src="/images/present.png"
                  alt="Present"
                  width={100}
                  height={40}
                  className="absolute bottom-3 left-[7%] z-40 h-auto w-[18%]"
                />

                {/* Call */}
                <Image
                  src="/images/call.png"
                  alt="Call"
                  width={100}
                  height={40}
                  className="absolute bottom-3 left-[27%] z-40 h-auto w-[18%]"
                />
              </div>

              <div className="absolute bottom-4 left-[48%] z-40 h-3 w-3 rounded-full bg-[#FF668C]" />
            </div>
          </div>

          {/* Text */}
          <div className="min-w-0 w-full flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-[#2F327D] md:text-2xl">
              A{" "}
              <span className="text-[#49BBBD]">
                user interface
              </span>{" "}
              designed for the classroom
            </h3>

            <ul className="mt-6 space-y-4">
              {[
                "Teachers don't get lost in the grid view and have a dedicated Podium space.",
                "TA's and presenters can be moved to the front of the class.",
                "Teachers can easily see all students and class data at one time.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-[#696984] md:text-base"
                >
                  <FiCheckCircle className="mt-0.5 shrink-0 text-[#49BBBD]" />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= FEATURE 2 ================= */}
        <div className="mt-16 flex min-w-0 flex-col-reverse items-center gap-10 md:mt-20 md:flex-row md:gap-12">
          <div className="min-w-0 w-full flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-[#2F327D] md:text-2xl">
              <span className="text-[#49BBBD]">Tools</span>{" "}
              For Teachers And Learners
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[#696984] md:text-base">
              Class has a dynamic set of teaching tools built to be deployed
              and used during class. Teachers can handout assignments in
              real-time for students to complete and submit.
            </p>
          </div>

          <div className="min-w-0 w-full flex-1">
            <Image
              src="/images/school girl.png"
              alt="Tools for teachers"
              width={500}
              height={500}
              className="mx-auto h-auto w-full max-w-[400px]"
            />
          </div>
        </div>

        {/* ================= FEATURE 3 ================= */}
        <div className="mt-16 flex min-w-0 flex-col items-center gap-12 md:mt-24 md:flex-row md:gap-16">
          {/* Graphic */}
          <div className="min-w-0 w-full flex-1">
            <div className="relative mx-auto w-full max-w-[340px] px-2 sm:max-w-[380px]">
              <Image
                src="/images/Ellipse 106.png"
                alt=""
                width={80}
                height={80}
                className="absolute -left-2 top-4 z-0 h-16 w-16 md:-left-6 md:h-20 md:w-20"
              />

              <div className="absolute left-10 top-0.5 z-0 h-3 w-3 rounded-full bg-[#FCCF4E]" />

              <div className="absolute -right-1 top-[55%] z-0 h-3 w-3 rounded-full bg-[#F56969]" />

              <div className="absolute -bottom-4 left-2 z-0 h-3 w-3 rounded-full bg-[#49BBBD]" />

              {/* Main Card */}
              <div className="relative z-10 min-w-0 rounded-3xl border border-gray-100/50 bg-white p-5 shadow-[0_15px_45px_rgba(0,0,0,0.06)] sm:p-6">
                <span className="inline-block rounded-full bg-[#E6E9F9] px-5 py-2 text-xs font-semibold text-[#5B72EE]">
                  Question 1
                </span>

                <p className="mt-5 text-[17px] font-bold leading-snug text-[#2F327D]">
                  True or false? This play
                  <br />
                  takes place in Italy
                </p>

                <div className="relative mt-4 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/landscape-1.png"
                    alt="Italy"
                    width={480}
                    height={260}
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Answer */}
                <div className="absolute -bottom-5 -right-5 z-30 w-[65%] max-w-[240px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)] sm:-right-8">
                  <Image
                    src="/images/Group 89.png"
                    alt="Answer sent"
                    width={260}
                    height={70}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              {/* Floating buttons */}
              <div className="absolute -right-1 -top-3 z-20 flex flex-col gap-2">
                <button
                  aria-label="Close"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-50 bg-white text-xs font-bold text-[#EB5757] shadow-[0_4px_10px_rgba(0,0,0,0.08)] transition-colors hover:bg-red-50/50"
                >
                  ✕
                </button>

                <div className="rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
                  <Image
                    src="/images/Group 88.png"
                    alt="Correct"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="min-w-0 w-full flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold leading-[1.2] tracking-tight text-[#2F327D] md:text-[38px]">
              Assessments,
              <br />
              <span className="text-[#49BBBD]">Quizzes</span>, Tests
            </h3>

            <p className="mt-5 w-full max-w-md text-base font-normal leading-relaxed text-[#696984]">
              Easily launch live assignments, quizzes, and tests. Student
              results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>

        {/* ================= FEATURE 4 ================= */}
        <div className="mt-16 flex min-w-0 flex-col-reverse items-center gap-10 md:mt-20 md:flex-row md:gap-12">
          <div className="min-w-0 w-full flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-[#2F327D] md:text-2xl">
              <span className="text-[#49BBBD]">
                Class Management
              </span>{" "}
              Tools for Educators
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[#696984] md:text-base">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>

          <div className="min-w-0 w-full flex-1">
            <Image
              src="/images/card.png"
              alt="GradeBook"
              width={500}
              height={400}
              className="mx-auto h-auto w-full max-w-[450px]"
            />
          </div>
        </div>

        {/* ================= FEATURE 5 ================= */}
        <div className="mt-16 flex min-w-0 flex-col items-center gap-10 md:mt-20 md:flex-row md:gap-12">
          <div className="min-w-0 w-full flex-1">
            <Image
              src="/images/card-image 2.png"
              alt="Private Discussion"
              width={500}
              height={400}
              className="mx-auto h-auto w-full max-w-[450px]"
            />
          </div>

          <div className="min-w-0 w-full flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-[#2F327D] md:text-2xl">
              One-on-One{" "}
              <span className="text-[#49BBBD]">
                Discussions
              </span>
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[#696984] md:text-base">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12 text-center md:mt-16">
          <button className="rounded-full border-2 border-[#49BBBD] px-8 py-3 text-sm font-medium text-[#49BBBD] transition hover:bg-[#49BBBD] hover:text-white">
            See more features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;