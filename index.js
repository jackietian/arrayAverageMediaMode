const data = require('./data/data');
const average = require('./src/average');
const median = require('./src/median');
const mode = require('./src/mode');

const calc = () => {
    let map = {};
    data.forEach(item => {
        if (map[item.id]) {
            map[item.id].push(item.temperature);
        } else {
            map[item.id] = [item.temperature];
        }
    });
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

console.log(calc());

module.exports = calc;