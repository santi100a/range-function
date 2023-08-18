/**
 * Generates an array of numbers within a specified range.
 *
 * @param start The starting value of the range.
 * @param end The ending value of the range.
 */
declare function range(start: number, end: number): number[];
/**
 * Generates an array of numbers within a specified range.
 *
 * @param start The starting value of the range.
 * @param end The ending value of the range.
 * @param step The increment or decrement value between each number in the range.
 */
declare function range(start: number, end: number, step: number): number[];
export = range;
