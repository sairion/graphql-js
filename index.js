import 'es6-promise';
import * as graphql from './src';

var _tasks = [];

global.setImmediate = function(func, ...args) {
    _tasks.push(function() {
        return func.apply(undefined, args);
    });
    return _tasks.length;
};

global.clearImmediate = function(func) {
    // We don't need it
};

global.flushTasks = function () {
    var i = 0;
    while (i < _tasks.length) {
        _tasks[i]();
        i++;
    }
    _tasks = [];
}

global.graphqlSync = function(...args) {
    var result;
    var error;
    graphql.graphql(...args).then(resolve => {
        result = resolve;
    }, reject => {
        error = reject;
    });
    flushTasks();
    if (error) {
        throw error;
    }
    return result;
}

module.exports = graphql;
