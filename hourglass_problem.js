'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let sum;
    for (let i=0; i + 2 < arr.length; i++){
        let tempSum
        for (let j =0; j + 2 < arr[i].length; j++){
            tempSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
            tempSum += arr[i + 1][j + 1]
            tempSum += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            if (i == 0 && j == 0) sum = tempSum;
            if (tempSum > sum) {
                console.log(tempSum, "-->", sum);
                sum = tempSum;
            }
            // console.log(i,'-->',j,'-->',sum,'-->',arr.length,'-->',arr[i].length)
        }
    }
    return sum;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
