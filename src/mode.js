const round = require('./round');

const mode = (list) => {
    const map = {};
    list.forEach(item => {
        map[item] = (map[item] || 0) + 1;
    })
    let count = 0;
    let mode = [];
    for (let prop in map) {
        if (map[prop] >= count) {
            count = map[prop];
        }
    }
    for (let prop in map) {
        if (map[prop] === count) {
            mode.push(parseFloat(prop));
        }
    }
    return mode;
}

module.exports = mode;