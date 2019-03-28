const median = require('../median');

it('test median function', () => {
    const list1 = [4, 3, 1, 2];
    expect(median(list1)).toBe(2.50);

    const list2 = [0, 1, 5, 3, 6];
    expect(median(list2)).toBe(3.00);
})