// first approach
const removeSmallest = numbers => {
    const copyNumbers = [...numbers];
    copyNumbers.splice(copyNumbers.indexOf(Math.min(...copyNumbers)), 1)
    return copyNumbers;
}

// second approach
const removeSmallest = numbers => numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));