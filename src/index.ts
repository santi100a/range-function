import assertTypeOf = require('@santi100/assertion-lib/cjs/type-of');

/**
 * Generates an array of numbers within a specified range.
 *
 * @param start The starting value of the range.
 * @param end The ending value of the range.
 */
function range(start: number, end: number): number[];
/**
 * Generates an array of numbers within a specified range.
 *
 * @param start The starting value of the range.
 * @param end The ending value of the range.
 * @param step The increment or decrement value between each number in the range.
 */
function range(start: number, end: number, step: number): number[];

/** Implementation */
function range(start: number, end: number, step = 1): number[] {
	assertTypeOf(start, 'number', 'start');
	assertTypeOf(end, 'number', 'end');
	assertTypeOf(step, 'number', 'step');

	if (step === 0)
		throw new TypeError(
			`"step" must not be zero. Got "${String(step)}" of type "${typeof step}".`
		);

	const result: number[] = [];

	if (step > 0) {
		for (let i = start; i < end; i += step) {
			result.push(i);
		}
	} else {
		for (let i = start; i > end; i += step) {
			result.push(i);
		}
	}

	return result;
}

export = range;
