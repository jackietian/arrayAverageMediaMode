const data = require('./data/data');
const average = require('./src/average');
const median = require('./src/median');
const mode = require('./src/mode');

const calc = (data) => {
    /**
     * #1. format the input to a map { a: [temperature1, temperature2], b: [temperature1, temperature2], ...}
     */
    let map = {};
    data.forEach(item => {
        map[item.id] = map[item.id] ? [...map[item.id], item.temperature] : [item.temperature];
    });

    /**
     * #2. format the map to the desired result
     */
    let result = [];
    Object.keys(map).forEach(key => {
        const temperatureList = map[key];
        result.push({
            id: key,
            average: average(temperatureList),
            median: median(temperatureList),
            mode: mode(temperatureList),
        });
    })
    return result;
}

console.log(calc(data));

module.exports = calc;