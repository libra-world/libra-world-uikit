module.exports = {
  // eslint-disable-next-line
  ...require('./config/jest.common'),
  projects: ['./config/jest.client.js', './config/jest.lint.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: [
    './packages/uikit/src/**/*.+(ts|tsx)',
    './packages/widgets/src/**/*.+(ts|tsx)',
  ],
}
