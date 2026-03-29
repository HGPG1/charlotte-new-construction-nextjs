/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'newconstruction.homegrownpropertygroup.com',
      },
    ],
  },
}

module.exports = nextConfig
