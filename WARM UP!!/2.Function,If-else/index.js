function printHelloWorld (){
    console.log("hello messi");
    
}
printHelloWorld()

function sum(a,b) {
    let add = a + b;
    console.log(add);
     
}
let x = 20;
let y = 16;
let z = 40

sum(x,z)

function squareNo(x){
    let no = x
    let square = console.log(`the square of ${no} is :${x * x}`);
    
    return square;
}
 squareNo(45)

function eligibleTOVote(age){
    if(age < 0){
        console.log("age not valid");
    }else if(age < 18 ){
        console.log('not eligible');
    }else{
        console.log('eligible');
        
    }
}
eligibleTOVote(22)

function evenOdd(num){
    let remainder = num % 2
    if(remainder == 0){
        console.log("even");
        
    }else{
        console.log("odd");
        
    }
}
evenOdd(20)

function eveOdd(num){
    if(num % 2 === 0){
        console.log('its an even number');
    }else{
        console.log('its an odd number');
        
    }
}
eveOdd(23)