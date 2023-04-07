const persistence = num => {
    let count = 0;
    while (Math.floor(num / 10) !== 0) {
        count++;
        num = num.toString().split('').reduce((product, digit) => product * digit, 1);
    }
    return count;
}