const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    client: {
      overlay: {
        warnings: false,
        errors: false
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {},
          javascriptEnabled: true
        }
      }
    }
  },
  transpileDependencies: true
})
