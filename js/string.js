// const name = "Dao Toan Thang";
// const job = " Front End Developer ";
// const newStr = `My name is ${name} and I am ${job} `;
// console.log(newStr);
// console.log(newStr.length);

const myStr = "Frontend Developer";
console.log(myStr.toLowerCase());
console.log(myStr.toUpperCase());
console.log(myStr.split(" "));
console.log(myStr.split(""));
console.log(myStr.split("/"));
console.log(myStr.startsWith("Front"));
console.log(myStr.endsWith("Developer"));
console.log(myStr.includes("end"));
console.log(myStr.indexOf("o"));

const myStr2 = "      Frontend Developer D       ";
console.log(myStr2.trim().replace("Developer D","Developer and Designer").toUpperCase().repeat(2));

