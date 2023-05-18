const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',

  });

module.exports = withNextra()
module.exports.basePath = '/docs';
module.exports.assetPrefix = '/docs';
module.exports.trailingSlash = false;
module.exports.images = {
    unoptimized: true
};
