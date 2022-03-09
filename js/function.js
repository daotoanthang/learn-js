// // function add(a,b){
// //     return a+b;
// // }

// // const sum = add;

// // function average(a,b,fn){
// //     const total = fn(a,b);
// //     return total / 2
// // }



// // let result = average(100,200,sum);
// // console.log(result);
// // const logName = function () {
// //     console.log("khong bi hoisting")
// // }
// // logName();

// // 3 kieu function 

// function add(a, b) {
//     return a + b;
// }

// const sum = add;

// function average(a, b, fn) {
//     const total = fn(a, b);
//     return total / 2
// }
// let result = average(100, 200, sum);
// console.log(result);

// // const logName = function () {
// //     console.log("khong bi hoisting");
// // }



//     (function () {
//         console.log("chay ngay lap tuc");
//     })();

// let myName = "Thang"; // global scope
// console.log(myName);

// function logYouName () { // function scope 
//     let myName2 = "Win";
//     console.log(myName2);
// }
// logYouName();


// closua
// function sayHello () {
//     let message = "Hello";
//     function sayHi () {
//         console.log(message);
//     }
//     return sayHi;
// }

// let hello = sayHello();
// hello();

function sayHello2 (message) {
    return function sayHi(name) {
        console.log(`${message} ${name}`);
    };
}

let hello = sayHello2("welcome to javascript");
hello("reactjs");





