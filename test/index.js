'use strict';

var test = require('tape');
var util = require('util');
var api = require('../api');

var input = require.resolve('./input');
var name = 'unminified';
var uglifyOptions = { mangle: true };

var requireOnce = require('./requireOnce');

test('throws', function (t) {
	t.throws(function () {
		api.register({ exclude: true });
	}, TypeError);

	t.throws(function () {
		api.register({ extensions: true });
	}, TypeError);

	t.throws(function () {
		api.register({ extensions: [] });
	}, RangeError);

	api.unregister();
	t.end();
});

test('works without options', function (t) {
	t.doesNotThrow(function () {
		api.register();
	});

	requireOnce(input);

	api.unregister();
	t.end();
});

test('works twice', function (t) {
	api.register();
	api.register();

	t.ok(true, 'double register worked');

	api.unregister();
	t.end();
});

test('uglifies', function (t) {
	var first = requireOnce(input);
	var returned = 'foo,bar';
	t.equal(first.name, name, 'unminified function has full name');
	t.equal(first(), returned, 'unminified function returns other functions‘ full names');

	api.register({ exclude: [/\/node_modules\//], uglify: uglifyOptions });

	var second = requireOnce(input);
	t.notEqual(second.name, name, 'minified function does not have full name: ' + util.inspect(second.name));
	var value = second();
	t.notEqual(value, returned, 'minified function does not return other functions’ full names: ' + util.inspect(value));

	api.unregister();
	t.end();
});

test('excludes', function (t) {
	api.register({ exclude: [/input/] });

	var mod = requireOnce(input);
	t.equal(mod.name, name);

	t.end();
});
