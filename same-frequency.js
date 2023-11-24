// add whatever parameters you deem necessary

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Constraints

// Time Complexity - O(N + M)

// let thisObj = {1: 0, 2: 0, 3: 0, }
// console.log("thisobj[1]:", thisObj[1])

function freqCount(int) {

    let freq = {}; 

    for(let i of int.toString()) {
        if(freq[i]) freq[i] ++; 
        else freq[i] = 1; 
    }

    return freq; 
}


function sameFrequency(int1, int2) {

    if(int1.length !== int2.length) return false; 
    
    let int1Freq = freqCount(int1); 
    let int2Freq = freqCount(int2); 

    for(let i of int1.toString()){
        if(int1Freq[i] !== int2Freq[i]) return false; 
    }
    return true;
}

// let result1 = sameFrequency(182,281) // true
// let result2 = sameFrequency(34,14) // false
// let result3 = sameFrequency(3589578, 5879385) // true
// let result4 = sameFrequency(22,222) // false

// console.log("result1:", result1)
// console.log("result2:", result2)
// console.log("result3:", result3)
// console.log("result4:", result4)
