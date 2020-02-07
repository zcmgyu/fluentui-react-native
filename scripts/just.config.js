// @ts-check

const { task, series, parallel, condition, option, argv, addResolvePath, prettierCheckTask, prettierTask } = require('just-scripts');

const path = require('path');
const fs = require('fs');

const { clean } = require('./tasks/clean');
const { copy } = require('./tasks/copy');
const { jest, jestWatch } = require('./tasks/jest');
const { ts } = require('./tasks/ts');
const { eslint } = require('./tasks/eslint');
const { webpack, webpackDevServer } = require('./tasks/webpack');
const { metroPackTask } = require('./tasks/metro-pack');
const { verifyApiExtractor, updateApiExtractor } = require('./tasks/api-extractor');
const checkForModifiedFiles = require('./tasks/check-for-modified-files');

module.exports = function preset() {
  // this add s a resolve path for the build tooling deps like TS from the scripts folder
  addResolvePath(__dirname);

  option('production');

  // Adds an alias for 'npm-install-mode' for backwards compatibility
  option('min', { alias: 'npm-install-mode' });

  option('webpackConfig', { alias: 'w' });

  // Build only commonjs (not other TS variants) but still run other tasks
  option('commonjs');

  // use Metro for bundling task instead of the default webpack
  option('useMetro');

  // for options that have a check/fix switch this puts them into fix mode
  option('fix');

  task('clean', clean);
  task('copy', copy);
  task('jest', jest);
  task('jest-watch', jestWatch);
  task('ts:commonjs', ts.commonjs);
  task('ts:esm', ts.esm);
  task('eslint', eslint);
  task('ts:commonjs-only', ts.commonjsOnly);
  task('webpack', webpack);
  task('metroPack', () => metroPackTask(argv()['bundleName']));
  task('webpack-dev-server', webpackDevServer);
  task('verify-api-extractor', verifyApiExtractor);
  task('update-api-extractor', updateApiExtractor);
  task('prettier', () => argv().fix ? prettierTask : prettierCheckTask);
  task('check-for-modified-files', checkForModifiedFiles);
  task(
    'ts',
    series(condition('ts:commonjs-only', () => argv().commonjs), condition(parallel('ts:commonjs', 'ts:esm'), () => !argv().commonjs))
  );

  task('validate', fs.existsSync(path.join(process.cwd(), 'jest.config.js')) ? parallel('eslint', 'jest') : 'eslint');
  task('code-style', series('prettier', 'eslint'));
  task('update-api', series('clean', 'copy', 'ts', 'update-api-extractor'));
  task('dev', series('clean', 'copy', 'webpack-dev-server'));

  task('build:node-lib', series('clean', 'copy', series(condition('validate', () => !argv().min), 'ts:commonjs-only'))).cached();

  task('bundle', series(condition('metroPack', () => argv().useMetro), condition('webpack', () => !argv().useMetro))).cached();

  task('build', series('clean', 'copy', parallel(condition('validate', () => !argv().min), 'ts'))).cached();

  task('no-op', () => { }).cached();
};
