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