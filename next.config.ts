import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  /* 
   * If deploying to a GitHub Pages Project site (e.g. username.github.io/repo-name),
   * you may need to set the basePath:
   */
  basePath: '/antigravity-chat-app',
  assetPrefix: '/antigravity-chat-app',
};

export default nextConfig;
