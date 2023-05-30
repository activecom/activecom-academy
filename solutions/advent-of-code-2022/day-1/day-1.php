<?php

$file = fopen("input-florence.txt", "r");
if ($file) {

    $caloriesPerElf = [];
    $caloriesForCurrentElf = 0;
    
    while (!feof($file)) {
        $line = trim(fgets($file));
        if(empty($line)){
            $caloriesPerElf[] = $caloriesForCurrentElf;
            $caloriesForCurrentElf = 0;
        }else{
            $caloriesForCurrentElf += intval($line);
        }
    }
    fclose($file);

    sort($caloriesPerElf);

    $caloriesOfTheFirst = array_pop($caloriesPerElf);
    $caloriesOfTheSecond = array_pop($caloriesPerElf);
    $caloriesOfTheThird = array_pop($caloriesPerElf);

    $sumOfCaloriesOfTheTop3Elves = $caloriesOfTheFirst + $caloriesOfTheSecond + $caloriesOfTheThird;

    echo "Part 1: ". $caloriesOfTheFirst."\n";
    echo "Part 2: ". $sumOfCaloriesOfTheTop3Elves."\n";
}
