<?php

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
const SCORE_LOST = 0;
const SCORE_DRAW = 3;
const SCORE_WIN = 6;

$file = fopen("input-florence.txt", "r");
if ($file) {

    $myScoreInPart1 = 0;
    $myScoreInPart2 = 0;

    while (!feof($file)) {
        $line = trim(fgets($file));
        if(empty($line)){
            continue;
        }
        list($firstColumn, $secondColumn) = explode(' ', $line);

        /* PART 1 */
        $opponentShape = shape($firstColumn);
        $myShape = shape($secondColumn);
        $myScoreInPart1 += myScoreForTheRoundInPart1($opponentShape, $myShape);

        /* PART 2 */
        $indicatedEnd = indicatedEnd($secondColumn);
        $myScoreInPart2 += myScoreForTheRoundInPart2($opponentShape, $indicatedEnd);
    }
    fclose($file);

    echo "Part 1: " . $myScoreInPart1 . "\n";
    echo "Part 2: " . $myScoreInPart2 . "\n";
}

/*** PART 1 ***/

function myScoreForTheRoundInPart1(int $opponentShape, int $myShape): int
{
    return $myShape + myScoreForTheOutcomeOfTheRound($opponentShape, $myShape);
}

function myScoreForTheOutcomeOfTheRound(int $opponentShape, int $myShape): int
{
    if($opponentShape === $myShape){
        return SCORE_DRAW;
    }

    if(shapeToDefeat($opponentShape) === $myShape){
        return SCORE_WIN;
    }else{
        return SCORE_LOST;
    }
}

assert(myScoreForTheRoundInPart1(shape('A'), shape('Y')) === 8);
assert(myScoreForTheRoundInPart1(shape('B'), shape('X')) === 1);
assert(myScoreForTheRoundInPart1(shape('C'), shape('Z')) === 6);

/*** PART 2 ***/

function myScoreForTheRoundInPart2(int $opponentShape, int $indicatedEnd): int
{
    $myShape = shapeIShouldChoose($opponentShape, $indicatedEnd);
    return $myShape + $indicatedEnd;
}

function shapeIShouldChoose(int $opponentShape, int $indicatedEnd): int
{
    switch ($indicatedEnd) {
        case SCORE_DRAW:
            return $opponentShape;
        case SCORE_WIN:
            return shapeToDefeat($opponentShape);
        case SCORE_LOST:
            return shapeToDefeat(shapeToDefeat($opponentShape));
    }
}

assert(myScoreForTheRoundInPart2(shape('A'), indicatedEnd('Y')) === 4);
assert(myScoreForTheRoundInPart2(shape('B'), indicatedEnd('X')) === 1);
assert(myScoreForTheRoundInPart2(shape('C'), indicatedEnd('Z')) === 7);

/*** UTILS ***/

function shapeToDefeat($shape): int
{
    switch ($shape) {
        case ROCK:
            return PAPER;
        case PAPER:
            return SCISSORS;
        case SCISSORS:
            return ROCK;
    }
}

function shape(string $choice): int
{
    switch ($choice) {
        case 'A':
        case 'X':
            return ROCK;
        case 'B':
        case 'Y':
            return PAPER;
        case 'C':
        case 'Z':
            return SCISSORS;
    }
}

function indicatedEnd(string $indication): int
{
    switch ($indication) {
        case 'X':
            return SCORE_LOST;
        case 'Y':
            return SCORE_DRAW;
        case 'Z':
            return SCORE_WIN;
    }
}



