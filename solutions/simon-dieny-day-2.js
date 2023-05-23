// https://www.youtube.com/post/UgzIM58y2LC1DH5qbLl4AaABCQ

// INSTRUCTION
// Transform a number into a reversed array
// Ex: 348597 => [7,9,5,8,4,3]

function reverse(n) {
    return typeof(n) !== "number"
        ? []
        : n.toString()
            .replace('-', '')
            .replace('.', '')
            .split("")
            .reverse()
            .map((v) => parseInt(v))
}

reverse(348597)

console.assert(reverse(348597).join('') === [7, 9, 5, 8, 4, 3].join(''))
console.assert(reverse('348597').join('') === [].join(''))
console.assert(reverse(-348597).join('') === [7, 9, 5, 8, 4, 3].join(''))
console.assert(reverse(348.597).join('') === [7, 9, 5, 8, 4, 3].join(''))
console.assert(reverse(2).join('') === [2].join(''))