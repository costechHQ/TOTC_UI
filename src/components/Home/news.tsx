import React from "react";
import Image from "next/image";

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

const News = () => {
  return (
    // FIXED: Wrapped the section inside a valid React Fragment
    <>
      {/* ================= LATEST NEWS ================= */}
      <section className="bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle>
            Latest <span className="text-[#49BBBD]">News</span> and Resources
          </SectionTitle>
          <SectionSubtitle>
            See the developments that have occurred to TOTC in the world
          </SectionSubtitle>

          {/* Split Layout: 1 Large Left Card + Right Column of Small Cards */}
          <div className="mt-10 flex flex-col gap-10 lg:mt-14 lg:flex-row lg:gap-12">
            {/* Left Column: Large Highlight Card */}
            <div className="w-full lg:w-[45%]">
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/news-main.png"
                  alt="Main News"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-5">
                <span className="inline-block rounded-full bg-[#49BBBD] px-4 py-1 text-xs font-semibold tracking-wider text-white">
                  NEWS
                </span>
                <h4 className="mt-4 text-xl font-bold leading-snug text-[#2F327D] sm:text-2xl">
                  Class adds $30 million to its balance sheet for a
                  Zoom-friendly edtech solution
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-[#696984]">
                  Class, launched less than a year ago by Blackboard co-founder
                  Michael Chasen, integrates exclusively...
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-medium text-[#696984] underline transition-colors hover:text-[#49BBBD]"
                >
                  Read more
                </a>
              </div>
            </div>

            {/* Right Column: Stacked List of 3 Small Cards */}
            <div className="flex w-full flex-col justify-between gap-8 lg:w-[55%]">
              {/* Small Card 1 */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-2xl sm:w-44 md:w-52">
                  <Image
                    src="/images/news-side-1.png"
                    alt="News Item 1"
                    width={460}
                    height={460}
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 right-3 rounded-md bg-[#49BBBD] px-2.5 py-1 text-[10px] font-bold tracking-wider text-white">
                    PRESS RELEASE
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-base font-bold leading-snug text-[#2F327D] hover:text-[#49BBBD] transition-colors">
                    Class Technologies Inc. Closes $30 Million Series A
                    Financing to Meet High Demand
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#696984] line-clamp-2">
                    Class Technologies Inc., the company that created Class...
                  </p>
                </div>
              </div>

              {/* Small Card 2 */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-2xl sm:w-44 md:w-52">
                  <Image
                    src="/images/news-side-2.png"
                    alt="News Item 2"
                    width={460}
                    height={460}
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 right-3 rounded-md bg-[#49BBBD] px-2.5 py-1 text-[10px] font-bold tracking-wider text-white">
                    NEWS
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-base font-bold leading-snug text-[#2F327D] hover:text-[#49BBBD] transition-colors">
                    Zoom&apos;s earliest investors are betting millions on a
                    better Zoom for schools
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#696984] line-clamp-2">
                    Zoom was never created to be a consumer product.
                    Nonetheless, the...
                  </p>
                </div>
              </div>

              {/* Small Card 3 */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-2xl sm:w-44 md:w-52">
                  <Image
                    src="/images/news-side-2.png"
                    alt="News Item 3"
                    width={460}
                    height={460}
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 right-3 rounded-md bg-[#49BBBD] px-2.5 py-1 text-[10px] font-bold tracking-wider text-white">
                    NEWS
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-base font-bold leading-snug text-[#2F327D] hover:text-[#49BBBD] transition-colors">
                    Former Blackboard CEO Raises $16M to Bring LMS Features to
                    Zoom Classrooms
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#696984] line-clamp-2">
                    This year, investors have reaped big financial returns from
                    betting on Zoom...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// FIXED: Exporting the component name matches the variable definition "News"
export default News;
