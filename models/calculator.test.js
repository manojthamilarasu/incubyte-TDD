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
    expect(add("1\n2,3")).toBe(6);
});