import createNextJsObfuscator from "nextjs-obfuscator";
import obfuscatorOptions from "./obfuscatorOptions.mjs";


const pluginOptions = {
    obfuscateFiles: {
        buildManifest: true,
        ssgManifest: true,
        webpack: true,
    },
}

const withNextJsObfuscator = createNextJsObfuscator(obfuscatorOptions, pluginOptions);

/** @type {import('next').NextConfig} */
const nextConfig = withNextJsObfuscator({
    async redirects() {
        return [
            {
                source: '/',
                destination: '/folio',
                permanent: true
            }
        ]
    },
    compiler: {
        styledComponents: true
    }
});

export default nextConfig;
