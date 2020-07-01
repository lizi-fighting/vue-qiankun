module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 8082,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  }
}
