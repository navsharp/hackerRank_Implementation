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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    let arr = new Array(n).fill(0);
    let great = 0;
    for (let i = 0; i < queries.length; i++){
        arr[queries[i][0] - 1] += queries[i][2];
        arr[queries[i][1]] -= queries[i][2];
        // console.log(arr);
    }
    // console.log(arr);
    let arr1 = new Array();
    arr1.push(arr[0]);
    for (let j = 1; j < n; j++){
        arr1.push(arr1[j - 1] + arr[j]);
        if (arr1[j] > great) {
            great = arr1[j];
        }
    }
    console.log(arr1)
    if(great<arr1[0]){great = arr1[0]}
    return great
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
