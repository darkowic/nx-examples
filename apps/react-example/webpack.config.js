/* eslint-disable @typescript-eslint/no-var-requires */
const reactWebpackConfig = require('@nrwl/react/plugins/webpack');
const workboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = (config) => {
  console.log('LOADING CUSTOM WEBPACK CONFIG!');
  const newConfig = reactWebpackConfig(config)
  newConfig.plugins.push(
    new workboxPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, 'src', 'serviceWorker.ts'),
      swDest: 'sw.js',
      maximumFileSizeToCacheInBytes: 1024 * 1024 * 100, // 100Mb cache limit for development
    })
  );
  return newConfig;
};
