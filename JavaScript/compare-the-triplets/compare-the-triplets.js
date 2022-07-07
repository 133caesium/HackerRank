'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    a.forEach((element, index) => {
        // console.log(`comparing ${element} with b's ${index} element being ${b[index]}`)
        if (element>b[index]) {
            // console.log(`${element} with b's ${index} element being ${b[index]}`)
            aliceScore++;
        } else if (element<b[index]) {
            bobScore++;
        }
    });
    return [aliceScore, bobScore];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

const test1Alice = [5, 6, 7]
const test2Bob = [3, 6, 10]
console.log(compareTriplets(test1Alice, test2Bob))
