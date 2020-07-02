module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 8082,
    open: false,
    overlay: {
      warnings: false,
      errors: false
    }
  }
}
