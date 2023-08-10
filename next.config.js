/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.pokemon.com'],
    remotePatterns: [
      {
          protocol: "https",
          hostname: "raw.githubusercontent.com"
      }
  ],
  }
}

module.exports = nextConfig
