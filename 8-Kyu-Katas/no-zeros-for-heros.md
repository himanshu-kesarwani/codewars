# CodeWars JavaScript Solutions

## No zeros for heros

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

```
1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
```

Zero alone is fine, don't worry about it. Poor guy anyway

### Solution

```javascript
// first solution using for loop

const noBoringZeros = n => {

  let result = n.toString().split("")
  for(let i=result.length-1;i>0;i--)
   {
     if(result[i] ==='0')
       result.pop()
     else
       break;
   }
    return Number(result.join(""))

}`Shark Bait!`
}

// second solution using regex and .replace
const noBoringZeros =n=> +`${n}`.replace(/0*$/, "");

/* .replace(/0*$/, ""): This is a regular expression that matches any number of trailing zeros at the end of the string and replaces them with an empty string. The $ character represents the end of the string, and the 0* pattern matches any number of zeros. */

```

[See on CodeWars.com](https://www.codewars.com/kata/570a6a46455d08ff8d001002/javascript)
