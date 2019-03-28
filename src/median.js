const round = require('./round');
/**
 * this function calculates the median of the list
 * @param list of numbers 
 */
const median = (list) => {
    if (list.length === 0) return 0;

    // sort the list to ascending
    list.sort();
    const size = list.length;
    if (size % 2 !== 0) {
        // return the middle item
        return list[(size + 1) / 2 - 1];
    } else {
        // return the (left middle + right middle sum) / 2
        const middleLeft = list[size / 2 - 1];
        const middleRight = list[size / 2];
        return round((middleLeft + middleRight) / 2);
    }
}

module.exports = median;