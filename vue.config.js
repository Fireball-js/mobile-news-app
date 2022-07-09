module.exports = {
    devServer: {

        proxy: {
            '/api': {
                target: 'https://www.bilibili.com',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}