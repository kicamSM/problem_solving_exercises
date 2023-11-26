// add whatever parameters you deem necessary

// Write a function called longestFall, which accepts an array of integers, and returns the length of the longest consecutive decrease of integers.

function longestFall(arr) {
    let count = 0;
    let longDec = []; 
    let idx1 = 0; 
    let idx2 = 1; 

    // going to need to loop over the array options are push into anaother araay? 
    //  three possibilities 
    while(idx2 < arr.length) {
        console.log("while loop is running")
        if(arr[idx1] > arr[idx2]) {
            console.log("if is running")
            longDec.push(arr[idx2]);
            idx1++;
            idx2++; 
            
            console.log("if idx1:", idx1)
            console.log("else idx2:", idx2)
        } else if(arr.length - idx1 > longDec.length) {
            console.log("if else is running")
            return longDec
        } else {
            console.log("else is running")
            idx1++;
            idx2++;
        }


    }
}

// let result1 = longestFall([5, 3, 1, 3, 0]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
// let result2 = longestFall([2, 2, 1]) // 2, 2-1 is the longest consecutive sequence of decreasing integers
// let result3 = longestFall([2, 2, 2]) // 1, 2 is the longest consecutive sequence of decreasing integers
// let result4 = longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
// let result5 = longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]) // 5, 9-8-7-6-5 is the longest
// let result6 = longestFall([]) // 0

// console.log("result1:", result1)
// console.log("result2:", result2)
// console.log("result3:", result3)
// console.log("result4:", result4)
// console.log("result5:", result5)


/**
 * For this function, we maintain a temporary count and a maximum count.
 *  If any element is smaller than the previous element, we count it.
 *  Then we compute the maximum each time the count increases.
 */
function longestFall2(nums) {
    let counter = 1;
    let maxCounter = 0;
  
    // quick fail case if the array is empty
    if (nums.length === 0) {
      return 0;
    }
  
    // note we are starting at 1 and  moving forward not starting at 0
    for (let i = 1; i < nums.length; i++) {
      // if current number is smaller than the previous number
      console.log("i:", i)
      console.log("nums[i]:", nums[i])
      console.log("nums[i - 1]:", nums[i - 1])
      if (nums[i] < nums[i - 1]) {
        console.log("counter:", counter)
        counter++;
        console.log("counter2:", counter)
        // this is setting max counter to greatest count 
        maxCounter = Math.max(counter, maxCounter);
      } else {
        counter = 1;
      }
    }
  
    // 1 is the default value for a non-empty array
    return maxCounter || 1;
  }
  
  let result01 = longestFall2([5, 3, 1, 3, 0]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
  console.log("result01:", result01)