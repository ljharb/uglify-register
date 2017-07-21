'use strict';

// eslint-disable-next-line func-style
function foo() {} // more function names, so that uglify doesn't remove this one

var named = function bar() {}; // eslint-disable-line func-name-matching

module.exports = function unminified() {
	return foo.name + ',' + named.name;
};
