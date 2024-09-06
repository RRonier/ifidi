/** @type {import('next').NextConfig} */
const nextConfig = {}

const { withNextVideo } = require('next-video/process');


module.exports = withNextVideo(
    nextConfig, {
        provider: 'vercel-blob'
    }
)