/**
 * this function calculates the modes of the array
 * @param array[]
 */
const mode = (list) => {
    // format the list to map: {item: quantity, ...}
    const map = {};
    list.forEach(item => {
        map[item] = (map[item] || 0) + 1;
    })

    // find the biggest quantity
    let quantity = 0;
    let modes = [];
    for (let prop in map) {
        if (map[prop] >= quantity) {
            quantity = map[prop];
        }
    }

    // find the item by quantity
    for (let prop in map) {
        if (map[prop] === quantity) {
            modes.push(parseFloat(prop));
        }
    }
    return modes;
}

module.exports = mode;