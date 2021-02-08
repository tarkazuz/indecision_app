
const path = require('path');

module.exports={
    //entry point
    entry: './public/src/app.js',
    //output
    output:{
        path: (path.join(__dirname, 'public')),
        filename: 'bundle.js'
    },
// loader
    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude:/node_modules/
        }
        ,{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
    ]

    },
    devtool: "cheap-module-eval-source-map",
    devServer:{
        contentBase: (path.join(__dirname, 'public'))
    }
};



