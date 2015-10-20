module.exports = {
  entry: "./src/prototype.tsx",
  output: {
    path: __dirname + "/dist",
    publicPath: './dist/',
    filename: "prototype.js",
  },
  resolve: {
    root: __dirname,
    
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    
    modulesDirectories: [
      "src",
      "node_modules"
    ]
  },
  module: {
    loaders: [
      { test: /\.ts(x)?$/, loader: "ts-loader" },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=image/svg+xml' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff2' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?\?$/, loader: 'file' },
      { test: /\.png$/, loader: 'url?limit=8192&mimetype=image/png' }
    ]
  }
}