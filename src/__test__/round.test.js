const round = require('../round');

it('round a number of 0.050 to 2 decimal', () => {
    expect(round(0.050)).toEqual(0.05);
})

it('round a number of 0.055 to 2 decimal', () => {
    expect(round(0.055)).toEqual(0.06);
})

it('round a number of 0.059 to 2 decimal', () => {
    expect(round(0.059)).toEqual(0.06);
})