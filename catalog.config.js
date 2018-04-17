const path = require("path");

module.exports = {
  webpack: (catalogWebpackConfig, {paths, dev, framework}) => {

    return {
      ...catalogWebpackConfig ,
      output: {
        ...catalogWebpackConfig.output,
        path: path.resolve('docs'),
      }
    };
  }
}
