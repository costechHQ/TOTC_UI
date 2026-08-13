import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Home/hero";
import Success from "@/components/Home/success";
import Footer from "@/Layout/footer"
import Cloud from "@/components/Home/cloud"
import Totc from "@/components/Home/totc";
import Features from "@/components/Home/features";
import Courses from "@/components/Home/courses";
import Testimonial from "@/components/Home/testimonial";
import News from "@/components/Home/news";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-sans`}
    >
      <Hero />
      <Success />
      <Cloud />
      <Totc />
      <Features />
      <Courses />
      <Testimonial />
      <News />
      <Footer />
    </div>
  );
}