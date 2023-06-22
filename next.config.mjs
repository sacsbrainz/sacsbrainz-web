/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
import CopyPlugin from "copy-webpack-plugin";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        // path: false,
        // url: false,
      };
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      };
      config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: "./public/tree-sitter.wasm",
              to: "./static/chunks/pages/docs/tree-sitter.wasm",
            },
          ],
        })
      );
    }

    return config;
  },
};
export default config;
// webpack: (config) => {
//   config.experiments = {
//     topLevelAwait: true,
//   }
//   config.resolve.fallback = {
//     url: require.resolve('url/'),
//     path: require.resolve('path-browserify'),
//     fs: false,
//     crypto: false,
//   }
//   return config
// }
