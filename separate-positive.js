// add whatever parameters you deem necessary

// Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).

// Time Complexity: O(N)


function separatePositive(arr) {

    let left = 0; 
    let right = arr.length - 1; 

    while(left <= right) {
        let wasSwapped = false; 

        if(arr[left] < 0 && arr[right] > 0) {
            let swap = arr[left]
            arr[left] = arr[right]; 
            arr[right] = swap;
            wasSwapped = true
        } 
        if(arr[right] < 0){
            right --; 
            wasSwapped = true; 

        } 
        if(arr[left] > 0){
            left ++; 
            wasSwapped = true; 
        }
        if(!wasSwapped) return arr
    }
    return arr;
}

// let result1 = separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
// let result2 = separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
// let result3 = separatePositive([-5, 5]) // [5, -5]
// let result4 = separatePositive([1, 2, 3]) // [1, 2, 3]
// let result5 = separatePositive([2, -1, -3, 6, -8, 10]) // []

// console.log("result1:", result1)
// console.log("result2:", result2)
// console.log("result3:", result3)
// console.log("result4:", result4)
// console.log("result5:", result5)