// first way using sort.
const findShort = s => s.split(" ").sort((a, b) => a.length - b.length)[0].length;

// second way using map
const findShort = s => Math.min(...s.split(" ").map(x => x.length))