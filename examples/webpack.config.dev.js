const path = require('path');

const commonSettings = require('./webpack.common');

module.exports = {
  devServer: {
    port: 3000,
    open: true,
    inline: true,
    hot: true,
    watchOptions: {
      ignored: /node_modules/
    },
    historyApiFallback: true
  },
  module: commonSettings.module,
  output: commonSettings.output,
  plugins: commonSettings.plugins,
  resolve: {
    alias: {
      // replace with any css - cannot ignore this import
      '@sandstreamdev/react-component-template/dist/styles.css': path.join(
        __dirname,
        'src',
        'app.css'
      ),

      // to import module sources
      '@sandstreamdev/react-component-template': path.join(
        __dirname,
        '..',
        'src'
      ),

      // to make the module use same react as example
      // (otherwise even if same version is in module sources used
      // we get error about duplicated react and cannot use hooks)
      react: path.resolve(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js']
  }
};
