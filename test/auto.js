'use strict';

var test = require('tape');
var requireOnce = require('./requireOnce');
var input = require.resolve('./input');
var api = require('../api');

test('"main" export', function (t) {
	var before = String(requireOnce(input));
	var main = requireOnce('../');
	var after = String(requireOnce(input));
	api.unregister();

	t.equal(main, api, 'exported value is `api`');

	t.notEqual(before, after, 'source code of exported function has changed');

	t.end();
});
