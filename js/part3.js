var number1 = "4.5";
console.log(Number(number1));

var number2 = 4.5;
console.log(String(number2));

// 0 , null ,undefined, false, NaN, "" - falsy 

console.log(Boolean("Thang dep trai dung khong?"));

// type coercion 

console.log(String(undefined));
console.log(String(null));
console.log(undefined + null);
console.log(!true);
console.log(String(""));


// + -> chuyen ve string . * / -  chuyen ve number



// == vs === , !== 

console.log(10 == "10");
console.log(10 === "10");
console.log(10 !== "10");