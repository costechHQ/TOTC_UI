"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

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

const books = [
  "Book.png",
  "Book-1.png",
  "Book-2.png",
  "Book-3.png",
  "Book-4.png",
  "Book-5.png",
  "Book-6.png",
];

const BookGroup = ({
  items,
}: {
  items: string[];
}) => {
  return (
    <div className="grid min-w-0 w-full grid-cols-4 items-end justify-items-center gap-1 sm:flex sm:flex-wrap sm:justify-center">
      {items.map((book, index) => (
        <div
          key={`${book}-${index}`}
          className="min-w-0 w-full max-w-[75px] sm:w-auto sm:max-w-none"
        >
          <Image
            src={`/images/${book}`}
            alt="Book"
            width={460}
            height={460}
            className="mx-auto h-auto max-h-36 w-auto max-w-full object-contain sm:h-44 md:h-48"
          />
        </div>
      ))}
    </div>
  );
};

const Courses = () => {
  return (
    <section className="w-full overflow-x-hidden bg-[#EBF5FF] px-5 py-16 sm:px-8 md:py-20 lg:px-12 xl:px-32">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle>Explore Course</SectionTitle>

        <SectionSubtitle>
          Ut sed eros finibus, placerat orci id, dapibus.
        </SectionSubtitle>

        {/* ================= ROW 1 ================= */}
        <div className="mt-12">
          <div className="mb-6 flex min-w-0 items-center justify-between gap-4">
            <h4 className="flex min-w-0 items-center gap-2 text-lg font-bold text-[#2F327D]">
              <span className="shrink-0 text-xl">👁️</span>
              <span className="truncate">Lorem Ipsum</span>
            </h4>

            <a
              href="#"
              className="flex shrink-0 items-center gap-1 text-sm font-medium text-[#49BBBD]"
            >
              SEE ALL
              <FiArrowRight />
            </a>
          </div>

          <div className="flex min-w-0 flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Books */}
            <div className="min-w-0 w-full lg:flex-1">
              <BookGroup items={books} />
            </div>

            {/* Detail */}
            <div className="w-full max-w-[400px] shrink-0">
              <Image
                src="/images/Detail.png"
                alt="Course"
                width={400}
                height={280}
                className="h-auto w-full rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        <div className="mt-14">
          <div className="mb-6 flex min-w-0 items-center justify-between gap-4">
            <h4 className="flex min-w-0 items-center gap-2 text-lg font-bold text-[#2F327D]">
              <span className="shrink-0 text-xl">🌐</span>
              <span className="truncate">Quisque a Consequat</span>
            </h4>

            <a
              href="#"
              className="flex shrink-0 items-center gap-1 text-sm font-medium text-[#49BBBD]"
            >
              SEE ALL
              <FiArrowRight />
            </a>
          </div>

          <div className="flex min-w-0 flex-col items-center gap-8 lg:flex-row lg:justify-center">
            {/* Left books */}
            <div className="min-w-0 w-full lg:flex-1">
              <BookGroup
                items={[
                  "Book.png",
                  "Book-1.png",
                  "Book-2.png",
                  "Book-3.png",
                ]}
              />
            </div>

            {/* Center */}
            <div className="w-full max-w-[400px] shrink-0">
              <Image
                src="/images/integer.png"
                alt="Course"
                width={400}
                height={280}
                className="h-auto w-full rounded-2xl shadow-sm"
              />
            </div>

            {/* Right books */}
            <div className="min-w-0 w-full lg:flex-1">
              <BookGroup
                items={[
                  "Book-5.png",
                  "Book-6.png",
                  "Book-5.png",
                ]}
              />
            </div>
          </div>
        </div>

        {/* ================= ROW 3 ================= */}
        <div className="mt-14">
          <div className="mb-6 flex min-w-0 items-center justify-between gap-4">
            <h4 className="flex min-w-0 items-center gap-2 text-lg font-bold text-[#2F327D]">
              <span className="shrink-0 text-xl">👤</span>
              <span className="truncate">Aenean Facilisis</span>
            </h4>

            <a
              href="#"
              className="flex shrink-0 items-center gap-1 text-sm font-medium text-[#49BBBD]"
            >
              SEE ALL
              <FiArrowRight />
            </a>
          </div>

          <div className="flex min-w-0 flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Detail */}
            <div className="w-full max-w-[400px] shrink-0">
              <Image
                src="/images/integer2.png"
                alt="Course"
                width={460}
                height={460}
                className="h-auto w-full rounded-2xl shadow-sm"
              />
            </div>

            {/* Books */}
            <div className="min-w-0 w-full lg:flex-1">
              <BookGroup items={books} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;