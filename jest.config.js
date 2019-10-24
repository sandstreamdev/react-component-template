module.exports = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/**/*.js'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  },

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/*.test.js'],

  // A map from regular expressions to paths to transformers
  transform: {
    '\\.js$': ['babel-jest'],
    '.+\\.(css)$': 'jest-transform-css'
  }
};
