const round = require('./round');

const average = (list) => {
    if (list.length === 0) return 0;
    return round(list.reduce((acc, cur) => acc + cur, 0) / list.length);
}

module.exports = average;