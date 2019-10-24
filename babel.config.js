const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        browsers: [
          'last 2 Chrome versions',
          'last 2 Firefox versions',
          'last 2 Safari versions',
          'last 2 Edge versions',
          'last 2 ChromeAndroid versions',
          'last 2 iOS versions'
        ],
        node: 'current'
      },
      modules: false
    }
  ],
  '@babel/preset-react'
];

const plugins = ['@babel/plugin-proposal-class-properties'];

module.exports = function(api) {
  const isTest = api.env('test');

  if (isTest) {
    plugins.push('@babel/plugin-transform-modules-commonjs');
  }

  return {
    presets,
    plugins
  };
};
