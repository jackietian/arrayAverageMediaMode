const mode = require('../mode');

it('test mode function', () => {
    const list2 = [1, 1, 5, 3, 6];
    expect(mode(list2)).toEqual([1]);
})