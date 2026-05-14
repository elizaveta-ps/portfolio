import { basePath } from './config/basePath.js';

/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    basePath,
    assetPrefix: `${basePath}/`,
    trailingSlash: true,
};

export default nextConfig;
