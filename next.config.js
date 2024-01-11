/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[{
            protocol: 'https',
            hostname: 'namaktab.ariomotion.com',
            port: '',

        }]
    }
}
module.exports = nextConfig;