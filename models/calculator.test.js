const { add } = require('./calculator');

test('Return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('Return 0 for undefined input', () => {
    expect(add()).toBe(0);
});

test('Return 0 for number input', () => {
    expect(add(12)).toBe(0);
});

test('Add up comma seperated numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});

test('Support New line as delimiter', () => {
    expect(add("1\n2,3,\n4")).toBe(10);
});

test('Support custom delimiter', () => {
    expect(add("//;\n1;2;3")).toBe(6);
});

test('Throw exception for one negative number', () => {
    expect(() => add("-1")).toThrowError("Negatives not allowed: -1");
});

test('Throw exception for negative numbers', () => {
    expect(() => add("1,-2,3,-4,-5")).toThrowError("Negatives not allowed: -2, -4, -5");
});

test('Ignore numbers greater than 1000', () => {
    expect(add("2,1001,3")).toBe(5);
});

test('Delimiters of all length', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
});

test('should support multiple delimiters of different lengths', () => {
    expect(add("//[*][%%%]\n1*2%%%3%%%4*5")).toBe(15);
});




