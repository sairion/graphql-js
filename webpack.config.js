module.exports = {
    entry: ['./index.js'],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'bundle.js',
        libraryTarget: 'var',
        library: 'GraphQL',
        path: __dirname
    },
};
