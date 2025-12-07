// QUESTION 1
// ..................................................................
// for (let i= 0; i<11; i++)
    
//     if(i % 2 == 0){
//     console.log(i + " is even number");
//     } else{
//     console.log(i + " is odd number");
//     }
// ............................................................
    
// let i=0;
// while(i<11){
//     if(i % 2 == 0){
//     console.log(i + " is even number");
//     } else{
//     console.log(i + " is odd number");
//     }
//     i++;
// }
// ..............................................................
// let i =0;
// do {
//     if(i % 2 == 0){
//     console.log(i + " is even number");
//     } else{
//     console.log(i + " is odd number");
//     }
//     i++;
// } while(i<11);
// ..............................................................
// ..............................................................


// QUESTION 4

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
// .............................................................
 
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// ..............................................................

// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i >= 1);
// ..............................................................
// .................................................................


// QUESTION 3

// let a = parseInt(prompt("Enter value a:"));
// let b = parseInt(prompt("Enter value b:"));

// let sum = 0;

// for (let i = a; i <= b; i++) {
//     sum += i;
// }

// console.log("The sum from " + a + " to " + b + " is: " + sum);
// .............................................................

// let a = parseInt(prompt("Enter value a:"));
// let b = parseInt(prompt("Enter value b:"));
// let sum = 0;
// let i = a;
// while (i <= b) {
//     sum += i;
//     i++;
// }
// console.log("The sum from " + a + " to " + b + " is: " + sum);
// .............................................................
// .............................................................

// QUESTION 2

// let num = prompt("Enter a number:");

// for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + (num * i));
// }
// .............................................................

//  let num = prompt("Enter a number:");
//  let i = 1;
//     while (i <= 10) {
//         console.log(num + " x " + i + " = " + (num * i));
//         i++;
//     }
// .............................................................

// let num = prompt("Enter a number:");
// let i = 1;
// do {
//     console.log(num + " x " + i + " = " + (num * i));
//     i++;
// } while (i <= 10);
// .............................................................
// .............................................................

// QUESTION 5

// let num = prompt("Enter a number:");

// let square = 0;

// for (let i = 1; i <= num; i++) {
//     square = square + Number(num); 
// }

// console.log("The square is: " + square);
// .............................................................

// let num = prompt("Enter a number:");

// let square = 0;
// let i = 1;
// while (i <= num) {
//     square = square + Number(num); 
//     i++;
// }
// console.log("The square is: " + square);
// .............................................................

// let num = prompt("Enter a number:");

// let square = 0;
// let i = 1;
// do {
//     square = square + Number(num); 
//     i++;
// } while (i <= num);
// console.log("The square is: " + square);
// ...............................................................
// ...............................................................


// QUESTION 7

// let num = prompt("Enter a number:");
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//     factorial = factorial * i;
// }

// console.log("The factorial of " + num + " is: " + factorial);
// .............................................................

// let num = prompt("Enter a number:");
// let factorial = 1;
// let i = 1;
// while (i <= num) {
//     factorial = factorial * i;
//     i++;
// }
// console.log("The factorial of " + num + " is: " + factorial);
// .............................................................

// let num = prompt("Enter a number:");
// let factorial = 1;
// let i = 1;
// do {
//     factorial = factorial * i;
//     i++;
// } while (i <= num);
// console.log("The factorial of " + num + " is: " + factorial);
// ...............................................................
// ...............................................................
// QUESTION 9

// for (let i = 2; i <= 50; i++) {  // start from 2, because 1 is not prime
//     let prime = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             prime = false;
//             break;
//         }
//     }

//     if (prime) {
//         console.log(i);
//     }
// }
// .............................................................

// let i = 2; 
// while (i <= 50) {
//     let prime = true;   
//     let j = 2;
//     while (j < i) {
//         if (i % j == 0) {
//             prime = false;
//             break;
//         }
//         j++;
//     }
//     if (prime) {
//         console.log(i);
//     }
//     i++;
// }
// .............................................................

// let i = 2; 
// do {
//     let prime = true;
//     let j = 2;
//     do {
//         if (i % j == 0) {
//             prime = false;
//             break;
//         }
//         j++;
//     } while (j < i);
//     if (prime) {
//         console.log(i);
//     }
//     i++;
// }
// while (i <= 50);
// ...............................................................
// ..............................................................

// QUESTION 8

// for (let i = 1; i <= 21; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//                 row += "* ";
//         }
//         console.log(row);
// }
// .............................................................

// let i = 1;
//  while (i <= 21) {
//          let row = "";
//             let j = 1;
//             while (j <= i) {
//                     row += "* ";
//                     j++;
//             }
//          console.log(row);
//          i++;
//  }

// .............................................................

// let i = 1;
// do {
//         let row = "";
//         let j = 1;
//         do {
//                 row += "* ";
//                 j++;
//         } while (j <= i);
//         console.log(row);
//         i++;
// } while (i <= 21);
// ...............................................................

// QUESTION 10

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }
// .............................................................

// let i = 1;
// while (i <= 50) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }
// .............................................................

let i = 1;
do {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
while (i <= 50);
// ...............................................................


