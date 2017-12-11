// Print 1 - 255
function printNumbers(num) {
    for(let i = 1; i <= num; i++){
        console.log(i)
    }
}

// Test
// printNumbers(255)

// Print Odd Numbers from 1 to 1000
function printOdd(num) {
    for(let i = 1; i <= num; i=i+2){
        console.log(i)
    }
}

// Test
// printOdd(1000)

// Print Sum of all odd numbers 1 to 5000
function printSum(num){
    let sum = 0;
    for(let i = 1; i <= num; i=i+2){
        sum = sum + i
    }
    console.log(sum)
}

// Test
// printSum(5000)

// Iterate through each member of an array and print the value
function iterateArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

// Test
// let arr1 = [1,3,5,7,9,13]
// iterateArray(arr1)

// Find Max in an Array
function findMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

// Test
// let arr2 = [-3,3,5,7]
// console.log(findMax(arr2))

// Find the average of given values in an Array
function findAverage(arr){
    let sum = arr[0];
    for(let i = 1; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum/arr.length;
}

// Test
// let arr2 = [1,3,5,7,20]
// console.log(findAverage(arr2))

// Create and Array with Odd Numbers
function createArray(num) {
    let y = [];
    for(let i = 1; i <= num; i=i+2){
        y.push(i);
    }
    return y;
}

// Test
// console.log(createArray(255))

// Return number of values greater than "Y" in a given array
function greaterThanY(arr, y) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > y) {
            count++;
        }
    }
    return count;
}

// Test
// let arr3 = [1,3,5,7]
// console.log(greaterThanY(arr3, 3))

// Given an array return the squares of each value
function sqaureTheValues(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

// Test
// let arr4 = [1,5,10,-2]
// console.log(sqaureTheValues(arr4))

// Given an array return an array where negatives are changed with 0
function noNegatives(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

// Test
// let arr5 = [1,5,10,-2]
// console.log(noNegatives(arr5))

// Given an array return max, min and average
function findMin(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

function maxMinAverage(arr) {
    console.log(findMax(arr));
    console.log(findMin(arr));
    console.log(findAverage(arr));
}

// Test
// let arr6 = [1,5,10,-2]
// maxMinAverage(arr6)

// Given an array shift the values to the left by 1, last value becomes 0
function shiftLeft(arr){
    for(let i = 0; i < arr.length; i++){
        if(i == arr.length-1){
            arr[i] = 0;
        } else{
            arr[i] = arr[i+1]
        }
    }
    return arr;
}

// Test
// let arr7 = [1,5,10,7,-2]
// console.log(shiftLeft(arr7))