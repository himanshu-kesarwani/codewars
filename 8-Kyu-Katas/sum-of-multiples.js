const sumMul = (n, m) => {
    let sum = 0;
    if (m > n) {
        for (let i = n; i < m; i += n) {
            sum += i;
        }
        return sum;
    } else return "INVALID";
};