const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = {
  webpack: (catalogWebpackConfig, { paths }) => {
    return merge(catalogWebpackConfig, {
      plugins: [
        new webpack.DefinePlugin({
          BASE_PATH: JSON.stringify(paths.publicUrl)
        })
      ]
    });
  }
};
