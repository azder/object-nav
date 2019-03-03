module.exports = {
    testEnvironment:   'node',
    testMatch:         [
        '**/test/**/(*.)(spec|test).js',
    ],
    coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
};
