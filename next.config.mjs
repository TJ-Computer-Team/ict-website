/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/ict',
    env: {
        NEXT_PUBLIC_ION_CLIENT_ID: process.env.NEXT_PUBLIC_ION_CLIENT_ID,
        NEXT_PUBLIC_ION_REDIRECT_URI: process.env.NEXT_PUBLIC_ION_REDIRECT_URI,
    },
};

export default nextConfig;
