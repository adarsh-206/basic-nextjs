// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://basic-nextjs.onrender.com',
    generateRobotsTxt: true,
    transform: async (config, path) => {
        return {
            loc: path,
            changefreq: 'daily',
            priority: path.includes('/blog') ? 0.9 : 0.7,
            lastmod: new Date().toISOString(),
        };
    },
};
