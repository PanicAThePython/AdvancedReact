const path = require('path')

module.exports = {
    entry: './app/src/components/index.jsx',
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{ test: /\.jsx$/, exclude: /node_modules/, use: 'babel-loader' }],
    },
}