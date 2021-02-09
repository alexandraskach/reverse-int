module.exports = function reverse(n) {
    let result = (n) => parseInt(String(n).split("").reverse().join(""), 10);
    return result(n);
};
