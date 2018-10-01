// Karma configuration
// Generated on Tue Sep 04 2018 13:54:40 GMT+0800 (China Standard Time)

module.exports = function (config) {
  config.set({

    logLevel: config.LOG_LOG,

    frameworks: ['jasmine'],

    files: [
      './node_modules/jquery/dist/jquery.js',
      'src/**.js'
    ],

    reporters: ['progress'],

    browsers: ['ChromeHeadless'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    client: {
      captureConsole: true
    },

    browserConsoleLogOptions: {
      level: 'log'
    },
  });
};
