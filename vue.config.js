module.exports = {
  transpileDependencies: ['vuetify'],

  devServer: {
    host: 'localhost'
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      enableBridge: false
    }
  }
}
