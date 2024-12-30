/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Disables Image Optimization API
      },
};

export default nextConfig;
