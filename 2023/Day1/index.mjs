// Import .txt file and split into array

import { readFileSync } from 'fs';
const input = readFileSync('./Day1/input.txt', 'utf8').split('\n');
export function solution() {
    const totalOfAllNumbers = input.reduce((acc, curr) => {
        const firstAndLastNumber = getFirstAndLastNumber(curr)
        acc += firstAndLastNumber
        return acc
    }, 0)
    return totalOfAllNumbers
}

function getFirstAndLastNumber(inputString) {
    const numbersArray = inputString.split('').filter(character => !isNaN(character))
    return Number(numbersArray[0] + numbersArray[numbersArray.length - 1])
}