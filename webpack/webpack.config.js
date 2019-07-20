require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');
const totalWorkers = require('os').cpus().length - 1;
const path = (pathStr) => resolve(__dirname,`../${pathStr}`);
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    devtool: devMode ? 'source-map' : false,

    context: path(''),
    entry: {
        'app': path('app/app.tsx'),
        'style': path('app/app.styl')
    },

    output: {
        filename: '[name].bundle.js',
        path: path('dist')
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [path('node_modules')]
    },

    module: {
        rules: [
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /webpack/,
                loader: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'tslint-loader',
                options: { emitErrors: true }
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                  { loader: 'cache-loader' },

                  {
                    loader: 'ts-loader',
                    options: {
                      happyPackMode: true,
                      instance: 'browser',
                    }
                }
              ]
            }
        ]
    },

    plugins: [
      new CleanWebpackPlugin(
        [path('dist')],{
            root: path(''),
      }),
        new HtmlWebpackPlugin({
          template: path('app/index.html')
        })
    ],

    devServer: {
      //hot: true
    }
};
