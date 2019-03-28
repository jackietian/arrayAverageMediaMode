const calc = require('../../index');
const data = require('../../data/data');

it('test main function', () => {
    const expctedResult = [{
            "id": "c",
            "average": 3.72,
            "median": 3.95,
            "mode": [3.36, 3.96]
        },
        {
            "id": "a",
            "average": 3.78,
            "median": 3.65,
            "mode": [3.53]
        },
        {
            "id": "b",
            "average": 4.08,
            "median": 4.14,
            "mode": [4.15]
        }
    ];

    const comparator = (a, b) => a.id < b.id;
    expect(calc(data).sort(comparator)).toEqual(expctedResult.sort(comparator));;
})
