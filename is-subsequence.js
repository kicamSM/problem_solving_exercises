// add whatever parameters you deem necessary

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// Time Complexity - O(N + M)

// function freqCount(str) {
//     let freq = {}; 

//     for(let char of str) {
//         if(freq[char]) freq[char] += 1;
//         else freq[char] = 1; 
//     }
//     return freq
// }

// let answer = freqCount("abcfff")

function isSubsequence(str1, str2) {
   console.log("original str1:", str1)
   console.log("original str2:", str2)

    let idxStr1 = 0;
    let idxStr2 = 0; 

    if(str2 < str1) return false; 
    // if (!str1) return true;

    while(idxStr2 < str2.length) {
        // looping through str2 

        if(str1[idxStr1] === str2[idxStr2]) {
            // if value of str1 idx1 os equal to value then we move our idx1 up by one
            idxStr1 += 1; 
        }
        // of odxStr 1 = str1.length we have looped through all of str1 and return true
        if (idxStr1 === str1.length) return true;
        // otherwise increase idxStr2 to see if value matches str1 
        idxStr2 += 1;
    }
        return false;
}




// ! note order matters but chars dont have to be next to eachother

let result1 = isSubsequence('hello', 'hello world'); // true
// let result2 = isSubsequence('sing', 'sting'); // true
// let result3 = isSubsequence('abc', 'abracadabra'); // true
// let result4 = isSubsequence('abc', 'acb'); // false (order matters)
// let result5 = isSubsequence('abcd:', 'abcef')


console.log("result1:", result1)
// console.log("result2:", result2)
// console.log("result3:", result3)
// console.log("result4:", result4)
// console.log("result5:", result5)