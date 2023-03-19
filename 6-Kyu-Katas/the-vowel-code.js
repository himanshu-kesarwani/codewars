const vowels = ['a', 'e', 'i', 'o', 'u']

const encode = string => string.split('').map(char => vowels.indexOf(char) + 1 || char).join("")

const decode = string => string.split('').map(char => vowels[Number(char) - 1] || char).join("")