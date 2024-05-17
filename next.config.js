/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sigurdwatt.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig
