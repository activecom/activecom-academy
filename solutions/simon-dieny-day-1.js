// https://www.youtube.com/post/UgzEHVIwbL4bGVG82bF4AaABCQ

// INSTRUCTION
// Returns the sum of the items of type number.
// You cannot use the loop syntax (for, for..in, while, ...)
// Ex: [1, 'John', 24, true] => 25

function sum(arr) {
    return arr.reduce((total, val) => (
        total + (typeof(val) === "number" ? val : 0)), 0
    )
}

sum([1, 'John', 24, true])

console.assert(sum([1, 'John', 24, true]) === 25)
console.assert(sum(['John', true]) === 0)
console.assert(sum([1.5, 'John', 2.5]) === 4)
console.assert(sum([30, -20, 200, -10]) === 200)
console.assert(sum([]) === 0)
console.assert(sum([30, -20, 200, -10]) === 200)
console.assert(sum(['3', 3]) === 3)
