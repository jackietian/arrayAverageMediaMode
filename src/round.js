const round = (num) => parseFloat((Math.round(num * 100) / 100).toFixed(2));
module.exports = round;