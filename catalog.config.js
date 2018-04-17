const path = require("path");

module.exports = {
  webpack: (catalogWebpackConfig, {paths, dev, framework}) => {
    console.log(catalogWebpackConfig, paths, dev, framework);
    return {
      ...catalogWebpackConfig ,
      output: {
        ...catalogWebpackConfig.output,
        path: path.resolve('docs'),
        publicPath: '/design-system'
      }
    };
  }
}
//
// { devtool: 'source-map',
//   bail: true,
//   entry:
//    { catalog:
//       [ '/Users/user/src/nulogy/design-system/node_modules/catalog/dist/cli/config/polyfills.js',
//         '/Users/user/src/nulogy/design-system/catalog/index.js' ] },
//   output:
//    { path: '/Users/user/src/nulogy/design-system/catalog/build',
//      pathinfo: false,
//      filename: 'static/[name].[chunkhash:8].js',
//      chunkFilename: 'static/[name].[chunkhash:8].chunk.js',
//      publicPath: '/' },
//   resolve:
//    { modules:
//       [ '/Users/user/src/nulogy/design-system/src',
//         'node_modules',
//         '/Users/user/src/nulogy/design-system/node_modules' ],
//      extensions: [ '.js', '.json', '.jsx' ],
//      alias:
//       { 'react-native': 'react-native-web',
//         'babel-standalone': 'babel-standalone/babel.min.js',
//         'js-yaml': 'js-yaml/dist/js-yaml.min.js' } },
//   resolveLoader:
//    { modules:
//       [ '/Users/user/src/nulogy/design-system/node_modules/catalog/node_modules',
//         '/Users/user/src/nulogy/design-system/node_modules' ] },
//   module: { rules: [ [Object], [Object] ] },
//   plugins:
//    [ UglifyJsPlugin { options: [Object] },
//      ManifestPlugin { opts: [Object] },
//      InterpolateHtmlPlugin { replacements: [Object] },
//      HtmlWebpackPlugin { options: [Object] },
//      DefinePlugin { definitions: [Object] },
//      CommonsChunkPlugin {
//        chunkNames: [Array],
//        filenameTemplate: undefined,
//        minChunks: [Function: minChunks],
//        selectedChunks: undefined,
//        children: undefined,
//        deepChildren: undefined,
//        async: undefined,
//        minSize: undefined,
//        ident: '/Users/user/src/nulogy/design-system/node_modules/webpack/lib/optimize/CommonsChunkPlugin.js0' },
//      CommonsChunkPlugin {
//        chunkNames: [Array],
//        filenameTemplate: undefined,
//        minChunks: Infinity,
//        selectedChunks: undefined,
//        children: undefined,
//        deepChildren: undefined,
//        async: undefined,
//        minSize: undefined,
//        ident: '/Users/user/src/nulogy/design-system/node_modules/webpack/lib/optimize/CommonsChunkPlugin.js1' },
//      ExtractTextPlugin {
//        filename: 'static/[name].[contenthash:8].css',
//        id: 1,
//        options: {} } ],
//   node: { fs: 'empty', net: 'empty', tls: 'empty' },
//   performance: { hints: false } } { unresolvedCatalogSrcDir: 'catalog',
//   unresolvedCatalogBuildDir: 'catalog/build',
//   catalogSrcDir: '/Users/user/src/nulogy/design-system/catalog',
//   catalogBuildDir: '/Users/user/src/nulogy/design-system/catalog/build',
//   catalogIndexJs: '/Users/user/src/nulogy/design-system/catalog/index.js',
//   catalogIndexHtml: '/Users/user/src/nulogy/design-system/catalog/index.html',
//   catalogStaticSrcDir: '/Users/user/src/nulogy/design-system/catalog/static',
//   catalogStaticBuildDir: '/Users/user/src/nulogy/design-system/catalog/build',
//   catalogSrcTemplateDir: '/Users/user/src/nulogy/design-system/node_modules/catalog/dist/setup-template',
//   appRoot: '/Users/user/src/nulogy/design-system',
//   appStaticSrcDir: '/Users/user/src/nulogy/design-system/public',
//   appStaticBuildDir: '/Users/user/src/nulogy/design-system/catalog/build',
//   appPackageJson: '/Users/user/src/nulogy/design-system/package.json',
//   appSrc: '/Users/user/src/nulogy/design-system/src',
//   yarnLockFile: '/Users/user/src/nulogy/design-system/yarn.lock',
//   babelrc: '/Users/user/src/nulogy/design-system/.babelrc',
//   appNodeModules: '/Users/user/src/nulogy/design-system/node_modules',
//   ownNodeModules: '/Users/user/src/nulogy/design-system/node_modules/catalog/node_modules',
//   nodePaths: [],
//   publicUrl: '/' } false 'UNKNOWN'
