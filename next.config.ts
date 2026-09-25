import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // GitHub Pages repository path
  basePath: "/soplex-sentinel",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;