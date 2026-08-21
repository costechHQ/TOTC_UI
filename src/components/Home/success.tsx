"use client";

import React from "react";

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

const Success = () => {
  const stats = [
    { num: "15K+", label: "Students" },
    { num: "75%", label: "Total success" },
    { num: "35", label: "Main questions" },
    { num: "26", label: "Chief experts" },
    { num: "16", label: "Years of experience" },
  ];

  return (
    <main className="w-full overflow-x-hidden">
      <section className="bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-12 xl:px-32">
        <div className="mx-auto w-full max-w-7xl">
          <SectionTitle>Our Success</SectionTitle>

          <SectionSubtitle>
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
            ultrices eu ornare tristique vel nisl orci.
          </SectionSubtitle>

          <div className="mt-10 grid grid-cols-2 items-center justify-center gap-x-6 gap-y-8 md:mt-14 md:grid-cols-5 md:gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-0 text-center"
              >
                <div className="text-3xl font-bold text-[#49BBBD] sm:text-4xl md:text-[42px]">
                  {stat.num}
                </div>

                <div className="mt-1 text-sm font-medium text-[#2F327D] md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Success;