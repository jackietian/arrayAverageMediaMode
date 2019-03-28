const average = require('../average');

it('test average function', () => {
    const list = [1, 2, 3, 4];
    expect(average(list)).toBe(2.5);
})