"use client";

import React from "react";
import {
  FiCalendar,
  FiUsers,
  FiFileText,
} from "react-icons/fi";

const SectionTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <h2 className="text-center text-2xl font-bold text-[#2F327D] md:text-3xl">
    {children}
  </h2>
);

const SectionSubtitle = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <p className="mx-auto mt-4 w-full max-w-2xl text-center text-sm leading-relaxed text-[#696984]">
    {children}
  </p>
);

const Cloud = () => {
  return (
    <section className="w-full overflow-x-hidden bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-12 xl:px-32">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle>
          All-In-One{" "}
          <span className="text-[#49BBBD]">
            Cloud Software.
          </span>
        </SectionTitle>

        <SectionSubtitle>
          TOTC is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </SectionSubtitle>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="min-w-0 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <div className="mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#F4EEFB]">
              <FiFileText className="text-2xl text-[#5B72EE]" />
            </div>

            <h3 className="mt-5 text-center text-lg font-bold text-[#2F327D]">
              Online Billing, Invoicing, & Contracts
            </h3>

            <p className="mt-3 text-center text-sm leading-relaxed text-[#696984]">
              Simple and secure control of your organization&apos;s financial
              and legal transactions. Send customized invoices and contracts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="min-w-0 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <div className="mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#E6F7F8]">
              <FiCalendar className="text-2xl text-[#49BBBD]" />
            </div>

            <h3 className="mt-5 text-center text-lg font-bold text-[#2F327D]">
              Easy Scheduling & Attendance Tracking
            </h3>

            <p className="mt-3 text-center text-sm leading-relaxed text-[#696984]">
              Schedule and reserve classrooms at one campus or multiple
              campuses. Keep detailed records of student attendance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="min-w-0 rounded-2xl bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1 md:p-8">
            <div className="mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#EBF1FF]">
              <FiUsers className="text-2xl text-[#5B72EE]" />
            </div>

            <h3 className="mt-5 text-center text-lg font-bold text-[#2F327D]">
              Customer Tracking
            </h3>

            <p className="mt-3 text-center text-sm leading-relaxed text-[#696984]">
              Automate and track emails to individuals or groups.
              Skilline&apos;s built-in system helps organize your
              organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cloud;