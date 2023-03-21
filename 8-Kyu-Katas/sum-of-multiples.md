# CodeWars JavaScript Solutions

## Sum of Multiples

Find the sum of all multiples of `n` below `m`

**Keep in Mind**

- `n` and `m` are natural numbers (positive integers).
- `m` is excluded from the multiples.

Examples

```javascript
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"

```

### Solution

```javascript
const sumMul = (n, m) => {
  let sum = 0;
  if (m > n) {
    for (let i = n; i < m; i += n) {
      sum += i;
    }
    return sum;
  } else return "INVALID";
};
```

[See on CodeWars.com](https://www.codewars.com/kata/57241e0f440cd279b5000829/javascript)
