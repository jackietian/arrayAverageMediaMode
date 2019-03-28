const round = require('../round');

it('round a number to 2 decimal', () => {
    expect(round(0.050)).toEqual(0.05);
    expect(round(0.055)).toEqual(0.06);
    expect(round(0.059)).toEqual(0.06);
})