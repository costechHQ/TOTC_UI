import React, { useState } from "react";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#252641] px-5 py-16 text-white sm:px-8 lg:px-32">
      <div className="mx-auto max-w-4xl flex flex-col items-center justify-center text-center">
      
        {/* ================= LOGO AREA ================= */}
        <div className="flex items-center justify-center gap-6">
          <Image
            src="/images/logo.png"
            alt="TOTC"
            width={80}
            height={40}
            className="h-10 w-auto"
          />
          <div className="h-8 w-px bg-white/30" />
          <span className="text-left text-sm font-medium text-white/80 leading-snug">
            Virtual Class
            <br />
            for Zoom
          </span>
        </div>

        {/* ================= NEWSLETTER AREA ================= */}
        <div className="mt-12 w-full max-w-xl">
          <p className="text-base font-normal tracking-wide text-[#B2B3CF]">
            Subscribe to get our Newsletter
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full max-w-[320px] rounded-full bg-transparent px-6 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-white/30 focus:ring-[#49C5D6] transition-all"
            />
            <button
              type="submit"
              className="w-full max-w-[130px] rounded-full bg-[#49C5D6] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#3bb1c2] shadow-[0_0_15px_rgba(73,197,214,0.35)] hover:shadow-[0_0_20px_rgba(73,197,214,0.5)]"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* ================= LINKS & COPYRIGHT ================= */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#B2B3CF]">
          <a
            href="#"
            className="transition hover:text-white"
          >
            Careers
          </a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a
            href="#"
            className="transition hover:text-white"
          >
            Privacy Policy
          </a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <a
            href="#"
            className="transition hover:text-white"
          >
            Terms & Conditions
          </a>
        </div>

        <p className="mt-4 text-center text-xs text-white/40">
          © 2026 Class Technologies Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
