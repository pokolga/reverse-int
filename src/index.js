module.exports = function reverse(n) {
    n = Math.abs(n);
    const arr = String(n).split("");
    arr.reverse();
    return Number(arr.join(""));
}
