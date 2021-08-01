const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'public')
    },
    devServer: {
        contentBase: "./public",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
          })
    ],
    resolve: {
        alias: {
            Utilities: path.resolve(__dirname, './src/components'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    }
}