'use strict';
var assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');
/** Implementation */
function range(start, end, step) {
	if (step === void 0) {
		step = 1;
	}
	assertTypeOf(start, 'number', 'start');
	assertTypeOf(end, 'number', 'end');
	assertTypeOf(step, 'number', 'step');
	if (step === 0)
		throw new TypeError(
			'"step" must not be zero. Got "'
				.concat(String(step), '" of type "')
				.concat(typeof step, '".')
		);
	var result = [];
	if (step > 0) {
		for (var i = start; i < end; i += step) {
			result.push(i);
		}
	} else {
		for (var i = start; i > end; i += step) {
			result.push(i);
		}
	}
	return result;
}
module.exports = range;
