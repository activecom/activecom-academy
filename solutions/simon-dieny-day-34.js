// https://www.youtube.com/post/UgkxZPDDusDNmuv49ahuqqtW4Yvqje7v2ohF

// MISSION
// Greenpeace needs your help to protect a group of islands unnoticed till today.
// Some company are already starting to exploit this new paradise.
// Can you create an algorithm to scan the zone and prove that no boat can go through?

// Instruction
// Return "false" if a row of islands stop the path

// Example
// [
//  [0,0,0,0,0], // 🌊,🌊,🌊,🌊,🌊
//  [1,1,0,0,0], // 🏝️,🏝️,🌊,🌊,🌊
//  [1,1,0,0,0], // 🏝️,🏝️,🏝️,🏝️,🏝️,
//  [0,0,0,1,1], // 🌊,🌊,🌊,🏝️,🏝️
// ] => false

const map= [
    [0,0,0,0,0], // 🌊,🌊,🌊,🌊,🌊
    [1,1,0,0,0], // 🏝️,🏝️,🌊,🌊,🌊
    [1,1,0,0,0], // 🏝️,🏝️,🏝️,🏝️,🏝️,
    [0,0,0,1,1], // 🌊,🌊,🌊,🌊,🌊
]

function isSafeForBoatVertical() {
    // Start Hacking ...
}

// Bonus
// Return "false" if a group of islands is contiguous and stop the path

// Example 1
// [
//  [0,0,0,0,0], // 🌊,🌊,🌊,🌊,🌊
//  [1,1,0,0,0], // 🏝️,🏝️,🌊,🌊,🌊
//  [1,1,0,0,0], // 🌊,🏝️,🏝️,🌊,🌊,
//  [0,0,0,1,1], // 🌊,🌊,🌊,🏝️,🏝️
// ] => true

// Example 2
// [
//  [0,0,0,0,0], // 🌊,🌊,🌊,🌊,🌊
//  [1,1,0,0,0], // 🏝️,🏝️,🌊,🌊,🌊
//  [1,1,0,0,0], // 🌊,🏝️,🏝️,🏝️,🌊,
//  [0,0,0,1,1], // 🌊,🌊,🌊,🏝️,🏝️
// ] => false

function isSafeForBoat() {
    // Start Hacking ...
}