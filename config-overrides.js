const { override, fixBabelImports, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('lodash', {
    libraryDirectory: '',
    camel2DashComponentName: false,
  }),
);
