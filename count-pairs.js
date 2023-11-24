// add whatever parameters you deem necessary

// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

// you could use sort but if you do that your effiency sucks 

// we are trying to avoid a nested loop which we have been using freq for but I dont think that will help in this case. 

// function otherfunction() {
//     // ? whatever this is doing, it should be allowing us to not use a nested loop. 

// }

function countPairs(arr, int) {
    let srtArr = arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    let count = 0;

    while(left < right) {
        let sum = srtArr[left] + srtArr[right]; 
        if(sum === int) {
            console.log("first if statement is running")
            count +=1;
            left++;
            right--; 
        } else if(sum > int){
            right --;
        } else {
            left++;
        }
    }
    return count; 
}


// let result1 = countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
// let result2 = countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
// let result3 = countPairs([4,6,2,7], 10) // 1 (4,6)
// let result4 = countPairs([1,2,3,4,5], 10) // 0
// let result5 = countPairs([1,2,3,4,5], -3) // 0
// let result6 = countPairs([0,-4],-4) // 1
// let result7 = countPairs([1,2,3,0,-1,-2],0) // 2

// console.log("result1:", result1)
// console.log("result2:", result2)
// console.log("result3:", result3)
// console.log("result4:", result4)
// console.log("result5:", result5)
// console.log("result5:", result6)
// console.log("result5:", result7)