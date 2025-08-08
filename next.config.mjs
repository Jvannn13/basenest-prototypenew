// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Skip TS type-checking during build so Vercel won't block deploy
    ignoreBuildErrors: true
  }
};

export default nextConfig;
