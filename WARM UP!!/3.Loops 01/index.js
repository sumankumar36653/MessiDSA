// parts of  forloop
// 1.initialization
// 2.condition
// 3.increment/decrement


for(let i = 0; i < 20; i++){
    console.log(i);
}


for(let i = 0; i < 10; i= i+1){
    console.log(i);
}


for(let i = 0; i < 10; i= i + 2){
    console.log("hello messi" + i);
}


for(i = 2; i < 9; i = i+2){
    console.log("hello messi" + i);
}

// decrement loop
for(let i = 10; i > 0; i--){
    console.log('hello ronaldo' + i);
};


for (i = 5; i>0; i= i-1){
    console.log('hello suman' + i);
    
}
// print even numbers from 20 to 2
for(let i = 20; i >=2; i--){
    if(i % 2 == 0){
        console.log('even number: ' + i);
        
    }
}
// another way
for(i =20 ; i >=2 ; i-=2){
    console.log('even number: ' + i);
}


// infinite loop
for(i=1 ; i > 0; i++){
    console.log('hello world' + i);
    if(i === 10){
        break; // to stop the infinite loop
    }
}

// function inside a loop
function greet(){
    console.log('Namaste Suman');
}
for(let i = 0; i < 5; i++){
    greet();
}

// while loops 
let i = 0;
while(i < 5){
    console.log('hello Suman' + i);
    i++;
}