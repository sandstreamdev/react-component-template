module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  },
  testMatch: ['**/*.test.js'],
  transform: {
    '\\.js$': ['babel-jest'],
    '.+\\.(css)$': 'jest-transform-css'
  }
};
