/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["@swc-jotai/debug-label", {}]],
  },
};

export default nextConfig;
