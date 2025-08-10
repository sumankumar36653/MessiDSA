// 1.Function to search for an element in an array
function searchElement(arr, x) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === x) {
            return index; // Element found
        }
    }
    return -1; // Element not found
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 49];
let result = searchElement(array, 50);
console.log(result);

// //2.function to get element  and index using for loop
function getElement(arr,idx){
    for(let i = 0; i < arr.length ; i++){
        if (i===idx){
            return{ index:i, element:arr[i]}
        }
    }
    return null;
}
let arr = [2,4,6,8,0,10,12]
let answer = getElement(arr, 3);
if(answer){
    console.log(`index: ${answer.index}, Element: ${answer.element}`);  
}else{
    console.log('invalid index');

}

//3.log negative number from the array
function countNegatives(arr1){
    let count = 0;
    for(let i=0; i<arr1.length; i++){
        if(arr1[i]<0){
            count++
            console.log(arr1[i]);

        }
    }
    return [count]
}
let arr1 = [1,-1,3,-10,-2,5,9,-8,-12,17,-39];
let res = countNegatives(arr1);
console.log("Total negatives numbers:",result);

//another way with arrays list
function returnNegativeNO(arr2){
    let negatives = []
    for(let i = 0; i< arr2.length; i++){
        if(arr2[i]<0){
            negatives.push(arr2[i]);
        }
    }
    return {NegativeNo:negatives}
}
let arr2 = [1,2,-4,5,-9,6,7];
let result1 = returnNegativeNO(arr2);
console.log(result1);


//4.find the largest number in an array
function largestNumber(arr3) {
    //we can use -infinity, arr[0] as innitial comparing point
    let largestNo = -Infinity;
    for (let i = 0; i < arr3.length; i++){
        if (arr3[i] > largestNo) {
            largestNo = arr3[i]
        }
    }
    return largestNo
}
let arr3 = [1,34,56,2,4,5,11];
let result2 = largestNumber(arr3);
console.log(result2);

// //5.find the smallest number in an array
function smallestNumber(arr4) {
    //we can use -infinity, arr[0] as innitial comparing point
    let smallestNo = Infinity;
    for (let i = 0; i < arr4.length; i++){
        if (arr4[i] < smallestNo) {
            smallestNo = arr4[i]
        }
    }
    return smallestNo
}
let arr4 = [1,34,56,2,4,5,11];
let result3 = smallestNumber(arr4);
console.log(result3);
