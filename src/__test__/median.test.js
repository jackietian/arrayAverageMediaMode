const median = require('../median');

it('test even median function', () => {
    const list = [4, 3, 1, 2];
    expect(median(list)).toBe(2.50);
})

it('test odd median function', () => {
    const list = [0, 1, 5, 3, 6];
    expect(median(list)).toBe(3.00);
})