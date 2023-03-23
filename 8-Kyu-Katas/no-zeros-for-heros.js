const noBoringZeros = n => {

    let result = n.toString().split("")
    for (let i = result.length - 1; i > 0; i--) {
        if (result[i] === '0')
            result.pop()
        else
            break;
    }
    return Number(result.join(""))

}
`Shark Bait!`
}

// second solution using regex and .replace
const noBoringZeros = n => +`${n}`.replace(/0*$/, "");

/* .replace(/0*$/, ""): This is a regular expression that matches any number of trailing zeros at the end of the string and replaces them with an empty string. The $ character represents the end of the string, and the 0* pattern matches any number of zeros. */