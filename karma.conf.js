var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: ['app/tests/**/*.test.jsx'],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reports: ['mocha'],
        client: {
            mocha: {
                timeout: '5000',
                reporter: 'spec',
                ui: 'bdd'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};