#!/usr/bin/env node

const x = process.argv[2];

if (!x || isNaN(parseInt(x))) {
    console.log('Missing number of occurrences');
} else {
    const numTimes = parseInt(x);
    for (let i = 0; i < numTimes; i++) {
        console.log('C is fun');
    }
}