module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 9999,
    open: true,
    overlay: {
      warnings: false,
      errors: false
    }
  }
}
