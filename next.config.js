/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

console.log('RAW_SYMBOL', process.env.RAW_SYMBOL)
console.log('WITH_SYMBOL', process.env.WITH_SYMBOL)
module.exports = nextConfig
