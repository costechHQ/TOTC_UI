import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http://res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;