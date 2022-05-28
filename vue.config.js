const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig
({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'ass': '@/assets',
        'com': '@/components',
        'vie': '@/views',
        'api': '@/api'
      }
    }
  }
})
