const {createDefaultConfig} = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = (config) => {
  config.set(
    merge(createDefaultConfig(config), {
      frameworks: ['mocha', 'chai'],
      client: {
        mocha: {ui: 'tdd'},
      },
      reporters: ['progress', 'mocha', 'coverage'],
      preprocessors: {
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        //'test/**/*_test.js': ['coverage'],
        'test/**/*.js': ['coverage'],
        './plutonium-account-panel.js': ['coverage']
      },
      plugins: [
        'karma-coverage'
      ],
      files: [
        {
          pattern: config.grep ? config.grep : 'test/**/*_test.js',
          type: 'module',
        },
      ],
      // See the karma-esm docs for all options
      esm: {
        nodeResolve: true,
      },
      coverageReporter: {
        includeAllSources: true,
        dir: 'coverage/',
        reporters: [
          { type: "html", subdir: "html" },
          { type: 'text-summary' }
        ]
      }
    })
  );
  return config;
};
