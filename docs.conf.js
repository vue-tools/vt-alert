var path = require('path')

module.exports = {
    port: 9999,
    webpack: {
        resolve: {
            alias: {
                'vt-alert': path.join(__dirname, 'dist/pc')
            }
        }
    },
    md: { dir: './' },
    vue: { dir: './docs' }
}