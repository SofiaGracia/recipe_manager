const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  devServer: {
    client:{
      WebSocket: {
        protocol: 'wss',
        hostname: '0.0.0.0',
        port: 443,
      }
    }
  },
  defineConfig: {
    transpileDependencies: true
  }
}