var path = require('path')

module.exports = {
    port: 9999,
    webpack: {
        resolve: {
            alias: {
                'src': path.join(__dirname, 'src')
            }
        },
        babel: {
            plugins: [
                ["diff-platform", { "path": path.join(__dirname, 'dist'), "platform": "pc"}]
            ]
        }
    },
    md: { dir: './' },
    vue: { dir: './docs' }
}