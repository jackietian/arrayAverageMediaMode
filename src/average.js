const round = require('./round');

/**
 * this function calculates of the average value of the list
 * @param list
 */
const average = (list) => {
    if (list.length === 0) return 0;
    return round(list.reduce((acc, cur) => acc + cur, 0) / list.length);
}

module.exports = average;