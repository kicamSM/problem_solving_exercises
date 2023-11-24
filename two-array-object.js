// add whatever parameters you deem necessary

// Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

function ArrLengthSame(arr2, length) {
    let qty = length - arr2.length 

    for(let i = 0; i < qty; i++) {
        arr2.push(null)
    }

    return arr2
}

function twoArrayObject(arr1, arr2) {
    let obj = {}; 

    if(arr1.length !== arr2.length && arr1.length > arr2.length) arr2 = ArrLengthSame(arr2, arr1.length);

    for(let idx in arr1) {
        obj[arr1[idx]] = arr2[idx]
    }

    return obj
}




// let result1 = twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
// let result2 = twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
// let result3 = twoArrayObject(['x', 'y', 'z', 'b'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}
// let result4 = twoArrayObject(['a', 'b', 'c'], [1, 2, 3])


// console.log("result1:", result1)
// console.log("result2:", result2)
// console.log("result3:", result3)
// console.log("result4:", result4)
