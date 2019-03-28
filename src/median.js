const round = require('./round');

const median = (list) => {
    list.sort();
    const size = list.length;
    if (size % 2 !== 0) {
        return list[(size + 1) / 2 - 1];
    } else {
        const middleLeft = list[size / 2 - 1];
        const middleRight = list[size / 2];
        return round((middleLeft + middleRight) / 2);
    }
}

module.exports = median;