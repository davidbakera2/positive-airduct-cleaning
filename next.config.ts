import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/brad',
        destination: '/',
        permanent: true,
      },
      {
        source: '/brad/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
  // Production optimizations
  compress: true,
};

export default nextConfig;
