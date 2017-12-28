'use strict';

var extensions = require.extensions;
var orig = {};
var UglifyJS = require('uglify-js');
var minify = UglifyJS.minify;
var isV2 = !!UglifyJS.parse && !!UglifyJS.defaults;

module.exports = {
	register: function register(options) {
		var opts = options || {};
		var exts = opts.extensions || ['.js'];
		var exclude = typeof opts.exclude === 'undefined' ? [] : opts.exclude;
		var uglifyOptions = opts.uglify || {};

		if (!Array.isArray(exts)) {
			throw new TypeError('"extensions" option must be an array if provided');
		}
		if (exts.length <= 0) {
			throw new RangeError('"extensions" option, if provided, must not be empty');
		}
		if (!Array.isArray(exclude)) {
			throw new TypeError('"exclude" option must be an array if provided');
		}

		exts.forEach(function (ext) {
			if (!orig[ext]) {
				orig[ext] = extensions[ext];
			}
			extensions[ext] = function uglifyRegister(module, filename) {
				var isExcluded = exclude.some(function (x) {
					return x.test(filename);
				});
				if (!isExcluded) {
					/* eslint no-underscore-dangle: 0 */
					var oldCompile = module._compile;
					module._compile = function (code, file) {
						/* istanbul ignore next */ var minifyArg = isV2 ? filename : code;
						var newCode = minify(minifyArg, uglifyOptions).code;
						module._compile = oldCompile;
						module._compile(newCode, file);
					};
					/* eslint no-underscore-dangle: 1 */
				}
				return orig[ext](module, filename);
			};
		});
	},
	unregister: function unregister(options) {
		var opts = options || {};
		var exts = opts.extensions || ['.js'];
		exts.forEach(function (ext) {
			if (orig[ext]) {
				extensions[ext] = orig[ext];
				delete orig[ext];
			}
		});
	},
};
