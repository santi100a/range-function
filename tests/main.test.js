describe('range', () => {
	const range = require('..');

	// Tests that the function returns an array of numbers from start to end with step 1
	it('should return an array of numbers from start to end with step 1', () => {
		const result = range(1, 5);
		expect(result).toEqual([1, 2, 3, 4]);
	});

	// Tests that the function returns an array of numbers from start to end with specified step
	it('should return an array of numbers from start to end with specified step', () => {
		const result = range(1, 10, 2);
		expect(result).toEqual([1, 3, 5, 7, 9]);
	});

	// Tests that the function returns an empty array if start and end are equal
	it('should return an empty array if start and end are equal', () => {
		const result = range(5, 5);
		expect(result).toEqual([]);
	});

	// Tests that the function returns an empty array if start is greater than end and step is positive
	it('should return an empty array if start is greater than end and step is positive', () => {
		const result = range(10, 5, 1);
		expect(result).toEqual([]);
	});

	// Tests that the function returns an empty array if start is less than end and step is negative
	it('should return an empty array if start is less than end and step is negative', () => {
		const result = range(5, 10, -1);
		expect(result).toEqual([]);
	});

	// Tests that the function returns an array with one element if start and end are consecutive and step is positive
	it('should return an array with one element if start and end are consecutive and step is positive', () => {
		const result = range(5, 6, 1);
		expect(result).toEqual([5]);
	});

	describe('error handling', () => {
		it('throws when start is missing or incorrect', () => {
			expect(range).toThrow();
			expect(() => range('not a number')).toThrow(
				/"start" must be of type "number"/
			);
			expect(() => range(false)).toThrow(/"start" must be of type "number"/);
			expect(() => range([])).toThrow(/"start" must be of type "number"/);
			expect(() => range({ not: 'a number' })).toThrow(
				/"start" must be of type "number"/
			);
		});
		it('throws when end is missing or incorrect', () => {
			expect(range).toThrow();
			expect(() => range(7, 'not a number')).toThrow(
				/"end" must be of type "number"/
			);
			expect(() => range(7, false)).toThrow(/"end" must be of type "number"/);
			expect(() => range(7, [])).toThrow(/"end" must be of type "number"/);
			expect(() => range(7, { not: 'a number' })).toThrow(
				/"end" must be of type "number"/
			);
		});
		it('throws when step is missing or incorrect', () => {
			expect(range).toThrow();
			expect(() => range(1, 7, 'not a number')).toThrow(
				/"step" must be of type "number"/
			);
			expect(() => range(1, 7, false)).toThrow(
				/"step" must be of type "number"/
			);
			expect(() => range(1, 7, [])).toThrow(/"step" must be of type "number"/);
			expect(() => range(1, 7, { not: 'a number' })).toThrow(
				/"step" must be of type "number"/
			);
		});
	});
});
