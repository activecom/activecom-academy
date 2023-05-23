// https://www.youtube.com/post/UgyEXbKgXKiGe9gwgVt4AaABCQ

// INSTRUCTION
// Count the number of valid smileys inside an array
// To be valid a smiley need to follow these three rules:
// 1. It must have a pair of eyes: either ":" or ";"
// 2. It can have a nose: either "-" or "~"
// 3. It must smile: either ")" or "D"
// Ex: [":)", ";}", ";-D"] => 2

function countSmileys(smileys) {
    return smileys.reduce((sum, s) => sum + isSmileyValid(s), 0)
}

function isSmileyValid(smiley) {
    if(smiley.length < 2 || smiley.length > 3) {
        return false
    }

    if(![':', ';'].includes(smiley[0])) {
        return false
    }

    if(smiley.length === 2) {
        return [')', 'D'].includes(smiley[1])
    }

    return ['~', '-'].includes(smiley[1]) && [')', 'D'].includes(smiley[2])
}

countSmileys([":)", ";}", ";-D", ";(", ":}", ":]"])

console.assert(countSmileys([":)", ";}", ";-D", ";(", ":}", ":]"]) === 2)
console.assert(countSmileys([":)", ";}", ";-D", ";(", ":}", ":]"]) === 2)
console.assert(countSmileys([":)", ":D"]) === 2)
console.assert(countSmileys([":-)", ":-D"]) === 2)
console.assert(countSmileys([":~)", ":~D"]) === 2)
console.assert(countSmileys([";)", ";D"]) === 2)
console.assert(countSmileys([";-)", ";-D"]) === 2)
console.assert(countSmileys([";~)", ";~D"]) === 2)
console.assert(countSmileys([]) === 0)