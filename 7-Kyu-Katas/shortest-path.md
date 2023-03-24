# CodeWars JavaScript Solutions

## Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

### Solution

```javascript
// first way using sort.
const findShort = (s) =>
  s.split(" ").sort((a, b) => a.length - b.length)[0].length;

// second way using map
const findShort = (s) => Math.min(...s.split(" ").map((x) => x.length));
```

[See on CodeWars.com](https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/javascript)
