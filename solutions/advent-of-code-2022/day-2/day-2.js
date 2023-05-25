const main = async () => {
    const fs = require('fs');

    await fs.readFile('input.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const rounds = splitBySingleLineBreak(uniformiseLineBreaks(data.trim())).map(r => r.split(' '))
        const roundsScore = rounds.map(r => shapeScore(r[1]) + roundOutcomeScore(r[1], r[0]))
        const totalScore = roundsScore.reduce((total, r) => total + r, 0)
        console.log(`Part 1: The total score using the strategy book would be ${totalScore}`)

        const roundsScoreBasedOnOutcome = rounds.map(r => scoreBasedOnOpponentAndDesiredOutcome(r[0], r[1]))
        const totalScoreBasedOnOutcome = roundsScoreBasedOnOutcome.reduce((total, r) => total + r, 0)
        console.log(`Part 2: The total score using the strategy book in a correct way would be ${totalScoreBasedOnOutcome}`)
    });
}

const shapeScore = (shape) => {
    const score = {
        'A': 1,
        'B': 2,
        'C': 3,
        'X': 1,
        'Y': 2,
        'Z': 3,
    }
    return score[shape] ?? 0
}

const isRock = (shape) => shape === 'A' || shape === 'X'
const isPaper = (shape) => shape === 'B' || shape === 'Y'
const isScissor = (shape) => shape === 'C' || shape === 'Z'

const roundOutcomeScore = (yourShape, opponentShape) => {
    if (isRock(yourShape) && isPaper(opponentShape)) {
        return 0
    }
    else if(isRock(yourShape) && isScissor(opponentShape)) {
        return 6
    }
    else if(isPaper(yourShape) && isScissor(opponentShape)) {
        return 0
    }
    else if(isPaper(yourShape) && isRock(opponentShape)) {
        return 6
    }
    else if(isScissor(yourShape) && isRock(opponentShape)) {
        return 0
    }
    else if(isScissor(yourShape) && isPaper(opponentShape)) {
        return 6
    }

    return 3
}

const scoreBasedOnOpponentAndDesiredOutcome = (opponentShape, desiredOutcome) => {
    if (isDraw(desiredOutcome)) {
        return shapeScore(opponentShape) + 3
    }

    if (isLost(desiredOutcome)) {
        if(isRock(opponentShape)) {
            return shapeScore('C') + 0
        }
        else if(isPaper(opponentShape)) {
            return shapeScore('A') + 0
        }

        return shapeScore('B') + 0
    }

    if(isRock(opponentShape)) {
        return shapeScore('B') + 6
    }
    else if(isPaper(opponentShape)) {
        return shapeScore('C') + 6
    }

    return shapeScore('A') + 6
}

const isLost = (outcome) => outcome === 'X'
const isDraw = (outcome) => outcome === 'Y'
const isWon = (outcome) => outcome === 'Z'

const uniformiseLineBreaks = (str) => str.replace(/(\r\n)|\r|\n/g, '\n')
const splitBySingleLineBreak = (str) => str.split(/\n+/g)

return main()