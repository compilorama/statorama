module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['html', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  moduleNameMapper: {
    '@src\/(.*)$': `<rootDir>/src/$1`
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
}
