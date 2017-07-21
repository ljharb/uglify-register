'use strict';

module.exports = function requireOnce(path) {
	var mod = require(path); // eslint-disable-line global-require
	delete require.cache[require.resolve(path)];
	return mod;
};
