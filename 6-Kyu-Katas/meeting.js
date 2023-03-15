const meeting = s =>
    s
    .toUpperCase()
    .split(";")
    .map(element => element.split(':').reverse())
    .sort()
    .reduce((acc, curr) => acc + `(${curr[0]}, ${curr[1]})`, "")