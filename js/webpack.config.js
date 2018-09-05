var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        index: './src/js/index.js',
        cart: './src/js/cart.js',
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[name].js',
        publicPath: ''
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['./dist'], {
            root: path.join(__dirname, ''),
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            title: 'index',
            filename: './index.html',
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            title: 'cart',
            filename: './cart.html',
            template: './src/cart.html',
            chunks: ['cart']
        }),
        new ExtractTextPlugin("index.css")
    ]
}
