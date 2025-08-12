//finding the second largest number from an array

function secondLargest(arr) {
    if(arr.length < 2 ){
        return null
    }
    let firstLargest = -Infinity
    let secondLargest = -Infinity
    for (let i = 0; i < arr.length; i++) {  //   iterating through each array
        if (arr[i] > firstLargest) {  //  found a largest number
            secondLargest = firstLargest; // collecting  and storing the old firstlargest number
            firstLargest = arr[i];  //   now updating the new big number in firstlargest
        }else if(arr[i]> secondLargest  && arr[i]< firstLargest ){ // now checking with the current secondlargest number and cureent firstLargest 
            secondLargest = arr[i]; // if both condion meets then its updating to secondLargest
        }
    }
    return secondLargest;
}

let arr = [1,34,2,5, 6,78, 15, 78];
let result = secondLargest(arr);
console.log(result);
