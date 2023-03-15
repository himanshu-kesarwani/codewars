# CodeWars JavaScript Solutions

---

## Meeting

**Definition**

John has invited some friends. His list is:

```javascript
s =
  "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
```

Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function ` meeting(s)` will be:

```javascript
"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)";
```

It can happen that in two distinct families with the same family name two people have the same first name too.

---

### Given Code

```javascript
function meeting(s) {
  // your code
}
```

---

### Solution

```javascript
const meeting = (s) =>
  s
    .toUpperCase()
    .split(";")
    .map((element) => element.split(":").reverse())
    .sort()
    .reduce((acc, curr) => acc + `(${curr[0]}, ${curr[1]})`, "");
```

[See on CodeWars.com](https://www.codewars.com/kata/59df2f8f08c6cec835000012)
