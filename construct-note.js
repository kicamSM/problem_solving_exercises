// add whatever parameters you deem necessary

// constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Constraints:

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:


function freqMap(str) {
    let freq = new Map; 

    for(let char of str){
        let charCount = freq.get(char) || 0;  
        freq.set(char, charCount + 1);  
    }
    return freq; 
}

function constructNote(str1, str2) {
    let str1Map = freqMap(str1);
    let str2Map = freqMap(str2); 

    for(let char of str1) {
        if(str1Map.has(char) && !str2Map.has(char)) return false; 
        if(str1Map.get(char) > str2Map.get(char)) return false; 
    }

    return true
}

// let result1 = constructNote('aa', 'abc') // false
// let result2 = constructNote('abc', 'dcba') // true
// let result3 =constructNote('aabbcc', 'bcabcaddff') // true


// console.log("result1:", result1)
// console.log("result2:", result2)
// console.log("result3:", result3)



// **** original function **** 

// function freqMap(str) {
//     // initiate empty map 
//     let freq = new Map; 
//     console.log("freq:", freq)

//     // loop through string add to map and initiate at zero if you run into the same char then add 1

//     for(let char of str){
//         let charCount = freq.get(char) || 0;  
//         freq.set(char, charCount + 1);  
//     }
//     return freq; 
// }


// function constructNote(str1, str2) {

//     let str1Map = freqMap(str1);
//     let str2Map = freqMap(str2); 
//     console.log('str1Map.has("a"):', str1Map.has("a"))
//     console.log("str1Map.get('a'):", str1Map.get('a'))

//     for(let char of str1) {
//         if(str1Map.has(char) && !str2Map.has(char)) return false; 
//         if(str1Map.get(char) > str2Map.get(char)) return false; 
//     }
//     // can message be built with ketters if
//     return true
// }

// let answer = freqMap('abcddd');
// console.log("answer:", answer)

// // str1 is message and only lower case letters no spaces  
// // str2 is lowercase letters and no spaces or special characters 

// let result1 = constructNote('aa', 'abc') // false
// let result2 = constructNote('abc', 'dcba') // true
// let result3 =constructNote('aabbcc', 'bcabcaddff') // true


// console.log("result1:", result1)
// console.log("result2:", result2)
// console.log("result3:", result3)