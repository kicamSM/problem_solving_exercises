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
    if(str2 < str1) return false; 

    for(let char of str1) {
        console.log("char:", char)
    //     console.log("str1[char]:", str1[char])
    //     console.log("str[char]:", str2[char])
    //    if(str1[char] !== str2[char]) return false; 
    }


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