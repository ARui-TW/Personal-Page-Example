module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Personal-Page-Example/' : '/',
  transpileDependencies: [
    'vuetify'
  ]
};
