// add whatever parameters you deem necessary

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Constraints:

// Time Complexity: O(N)

function averagePair(arr, average) {
    console.log("multPoint is running")

let left = 0;  
let right = arr.length - 1; 

while(left < right) {
    let sumAvr = (arr[left] + arr[right]) / 2; 
    console.log("sumAvr:", sumAvr)
    if(sumAvr === average) {
            return true;
        } else if(sumAvr > average) {
            right --; 
        } else {
            left ++; 
        }
    }
    return false; 

}

// let result1 = averagePair([1, 2, 3], 2.5); // true
// let result2 = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// let result3 = averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// let result4 = averagePair([], 4); // false

// console.log("result1:", result1)
// console.log("result2:", result2)
// console.log("result3:", result3)
// console.log("result4:", result4)