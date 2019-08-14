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



function rotate(a, n, d) {

    reversal(a, 0, d-1);
    console.log("1-->",a);
    reversal(a, d, n - 1);
    console.log("2-->",a);
    reversal(a, 0, n-1);
    console.log("3-->",a);
   return a;
}

function reversal(arr, min, max) {
    // console.log("min", min);
    // console.log("max", max);
    // max++
    // if (min == max) return;
    // let half = Math.floor((max - min) / 2);
    // let len = max - min;
    // for (let i = 0; i < half; i++) {
    //     let temp = arr[len - i];
    //     arr[len - i] = arr[i];
    //     arr[i] = temp;
    // }
    while (min < max) {
        let temp = arr[max];
        arr[max] = arr[min];
        arr[min] = temp;
        min++;
        max--;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = rotate(a, n, d);

    ws.write(result.join(' '));
    ws.end();
}
