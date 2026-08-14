import React from "react";
import Image from "next/image";
import { FiArrowRight} from "react-icons/fi";


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
    className={`mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-[#696984] md:text-base ${className}`}
  >
    {children}
  </p>
);



const Courses = () => {
  return (

      <section className="bg-[#EBF5FF] px-5 py-16 sm:px-8 md:py-20 lg:px-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle>Explore Course</SectionTitle>
          <SectionSubtitle>
            Ut sed eros finibus, placerat orci id, dapibus.
          </SectionSubtitle>

          {/* Row 1 - Lorem Ipsum */}
          <div className="mt-12">
            {/* Row Header */}
            <div className="mb-6 flex items-center justify-between">
              <h4 className="flex items-center gap-2 text-lg font-bold text-[#2F327D]">
                <span className="text-xl">👁️</span> Lorem Ipsum
              </h4>
              <a
                href="#"
                className="flex items-center gap-1 text-sm font-medium text-[#49BBBD]"
              >
                SEE ALL <FiArrowRight />
              </a>
            </div>

            {/* Row Content */}
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              {/* Books Layout (7 items) */}
              <div className="flex items-end justify-center gap-1.5 overflow-hidden">
                {[
                  "Book.png",
                  "Book-1.png",
                  "Book-2.png",
                  "Book-3.png",
                  "Book-4.png",
                  "Book-5.png",
                  "Book-6.png",
                ].map((book, index) => (
                  <Image
                    key={index}
                    src={`/images/${book}`}
                    alt="Book"
                    width={460}
                    height={460}
                    className="h-36 w-auto object-contain sm:h-44 md:h-48"
                  />
                ))}
              </div>

              {/* Detail Card Container */}
              <div className="w-full max-w-100 shrink-0">
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

          {/* Row 2 - Quisque a Consequat */}
          <div className="mt-14">
            {/* Row Header */}
            <div className="mb-6 flex items-center justify-between">
              <h4 className="flex items-center gap-2 text-lg font-bold text-[#2F327D]">
                <span className="text-xl">🌐</span> Quisque a Consequat
              </h4>
              <a
                href="#"
                className="flex items-center gap-1 text-sm font-medium text-[#49BBBD]"
              >
                SEE ALL <FiArrowRight />
              </a>
            </div>

            {/* Row Content - Card Intersected in the Middle */}
            
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              {/* Left Side Books (4 items) */}
              <div className="flex items-end justify-center gap-1.5">
                {["Book.png", 
                "Book-1.png", 
                "Book-2.png", 
                "Book-3.png"].map(
                  (book, index) => (
                    <Image
                      key={index}
                      src={`/images/${book}`}
                      alt="Book"
                      width={460}
                      height={460}
                      className="h-36 w-auto object-contain sm:h-44 md:h-48"
                    />
                  ),
                )}
              </div>

              {/* Center Detail Card Container */}
              <div className="w-full max-w-100 shrink-0">
                <Image
                  src="/images/integer.png"
                  alt="Course"
                  width={400}
                  height={280}
                  className="h-auto w-full rounded-2xl shadow-sm"
                />
              </div>

              {/* Right Side Books (3 items) */}
              <div className="flex items-end justify-center gap-1.5">
                {["Book-5.png", 
                "Book-6.png", 
                "Book-5.png"].map(
                  (book, index) => (
                    <Image
                      key={index}
                      src={`/images/${book}`}
                      alt="Book"
                      width={460}
                      height={460}
                      className="h-36 w-auto object-contain sm:h-44 md:h-48"
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Row 3 - Aenean Facilisis */}
          <div className="mt-14">
            {/* Row Header */}
            <div className="mb-6 flex items-center justify-between">
              <h4 className="flex items-center gap-2 text-lg font-bold text-[#2F327D]">
                <span className="text-xl">👤</span> Aenean Facilisis
              </h4>
              <a
                href="#"
                className="flex items-center gap-1 text-sm font-medium text-[#49BBBD]"
              >
                SEE ALL <FiArrowRight />
              </a>
            </div>

            {/* Row Content */}
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              {/* Left Detail Card Container */}
              <div className="w-full max-w-100 shrink-0">
                <Image
                  src="/images/integer2.png"
                  alt="Course"
                  width={460}
                  height={460}
                  className="h-auto w-full rounded-2xl shadow-sm"
                />
              </div>

              {/* Right Side Books (7 items) */}
              <div className="flex items-end justify-center gap-1.5 overflow-hidden">
                {[
                  "Book.png",
                  "Book-1.png",
                  "Book-2.png",
                  "Book-3.png",
                  "Book-4.png",
                  "Book-5.png",
                  "Book-6.png",
                ].map((book, index) => (
                  <Image
                    key={index}
                    src={`/images/${book}`}
                    alt="Book"
                    width={500}
                    height={500}
                    className="h-36 w-auto object-contain sm:h-44 md:h-48"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Courses;