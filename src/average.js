const round = require('./round');

const average = (list) => {
    if (list.length) return round(list.reduce((acc, cur) => acc + cur, 0) / list.length);
    return 0;
}

module.exports = average;