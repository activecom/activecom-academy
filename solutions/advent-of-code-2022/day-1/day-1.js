const main = async () => {
    const fs = require('fs');

    await fs.readFile('input.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        /** @type {string[][]} */
        const packingForEachElves = splitByDoubleLineBreak(
            uniformiseLineBreaks(data.trim())
        ).map(p => splitBySingleLineBreak(p))

        const caloriesForEachElves = packingForEachElves.map(packing => (
            packing.reduce((total, cal) => total + parseInt(cal), 0)
        ));

        const theElfWithTheMostCalories = Math.max(...caloriesForEachElves)
        console.log(`Part 1: The elf with the most calories has in total ${theElfWithTheMostCalories} calories`)

        const topThreeElvesWithTheMostCalories = caloriesForEachElves
            .sort((a, b) => b -a)
            .slice(0, 3)
            .reduce((total, current) => total + current)
        console.log(`Part 2: The top three elves have in total ${topThreeElvesWithTheMostCalories} calories`)
    });
}

const uniformiseLineBreaks = (str) => str.replace(/(\r\n)|\r|\n/g, '\n')
const splitBySingleLineBreak = (str) => str.split(/\n+/g)
const splitByDoubleLineBreak = (str) => str.split(/\n\n+/g)

return main()