module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 8081,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  }
}
