const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = {
  webpack: catalogWebpackConfig => {
    return merge(catalogWebpackConfig, {
      plugins: [
        new webpack.DefinePlugin({
          BASE_PATH: JSON.stringify(
            process.env.NODE_ENV === 'production' ? '/design-system' : '/'
          )
        })
      ]
    });
  }
};
