const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        // loadPage: './src/loadPage.js',
        // loadNavBar: './src/navBar.js',
        // addClick: './src/addEventListeners.js',
        // welcomePage: './src/welcomePageData.js',
        // menuPage: './src/menuPageData.js',
        // contactPage: './src/contactPageData.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: "KP's Bistro",
            template: './index copy.html'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: './',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};