const { defaults } = require('ts-jest/presets/index.js');

module.exports = {
  ...defaults,
  testEnvironment: 'jsdom',
};