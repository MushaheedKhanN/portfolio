// postcss.config.cjs (or .js / .mjs based on ESM/CJS setup)
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    // you can remove autoprefixer if not needed, as new versions may handle prefixes automatically
    autoprefixer: {},
  },
};
