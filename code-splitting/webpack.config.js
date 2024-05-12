const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,'src','index.js'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist'),
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:[
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },

    devServer: {
        static: path.join(__dirname, 'dist'),
        historyApiFallback: true,
    }

};