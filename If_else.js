// Q1.Check number is positive, negative, or zero.=============

// let num =-4;

// if (num>0){
//     console.log(`${num} is Positive`);
// }
// else if(num==0){
//     console.log(`${num} is zero`);
// }
// else{
//     console.log(`${num} is Nigative`)
// }

// Q2.Check number is even or odd.==========================

// let num =94;

// if (num%2==0){
//     console.log(`${num} is even`);
// }
// else{
//     console.log(`${num} is odd`);
// }

// Q3.Check whether a person is eligible to vote (18+).============

// let person= 22;

// if(person>=18){
//     console.log(`Person is eligible to vote.`)
// }
// else{
//     console.log(`Person is not eligible to vote.`)
// }

// Q4.Check whether a year is a leap year.====================

// let year = ;

// if((year%4===0 && year%100!==0)||(year%400===0)){
// console.log(`${year} is Leap Year.`);
// }
// else{
//     console.log(`${year} is not Leap Year`);
// }

//  Q5.Find the largest of two numbers.====================

// let num1=45;
// let num2=55;

// if (num1>num2){
//     console.log(`${num1} is Big`);
//     console.log(`${num2} is Small`)
// }
// else{
//     console.log(`${num2} is Big`)
//     console.log(`${num1} is Small`)

// }

//  Q6.Find the largest of three numbers.==================

// let num1=432;
// let num2=99;
// let num3=44;

// if (num1>num2&&num1>num3){
//     console.log(`${num1} is Big`);
// }
// else if(num2>num1&&num2>num3){
//     console.log(`${num2} is Big`);
// }
// else{
//     console.log(`${num3} is Big`)
// }

let num1=432;
let num2=442;
let num3=44;

if (num1>num2 && num1>num3){
    console.log(`${num1} is Big`);
    if(num2>num3){
        console.log(`${num2} is Biger then ${num3} and smaller then ${num1}`);
        console.log(`${num3} is small`)
    }
    else{
         console.log(`${num3} is Biger then ${num2} and smaller then ${num1}`);
         console.log(`${num2} is small`)  
    }   
}
else if(num2>num1&& num2>num3){
     console.log(`${num2} is Big`);
    if(num3>num1){
        console.log(`${num3} is Biger then ${num1} and smaller then ${num2}`);
        console.log(`${num1} is small`)
    }
    else{
         console.log(`${num1} is Biger then ${num3} and smaller then ${num2}`);
         console.log(`${num3} is small`)
    }
}
else if(num3>num1&& num3>num2){
    console.log(`${num3} is Big.`);
    if(num2>num1){
        console.log(`${num2} is Biger then ${num1} and smaller then ${num3}`);
        console.log(`${num1} is small`)
    }
    else{
         console.log(`${num1} is Biger then ${num2} and smaller then ${num3}`);
         console.log(`${num} is small`)
       
    }
}