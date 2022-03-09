// // so sanh 2 so, tim so lon hon
function compare(a=0,b=0) {
    if(typeof a !== "number" || typeof b !== "number") {
        console.log(" Vui long nhap so");
        return;
    }
    return Math.max(a,b);
}

// console.log(compare(100,"200"));

// function rename(name = "") {
//     if(name.length === 0) {
//         return null;
//     }
//     let newWord = name.toLowerCase().charAt(0).toUpperCase();
//     let otherWord = name.toLowerCase().slice(1);
//     return `${newWord}${otherWord}`;
// }

// console.log(rename("Thang"));

// function useCallback (a,b,callback) {
//     let max = compare(a,b);
//     callback(max);
// }

// function callback(number) {
//     console.log("So lon hon la " + number)
// }

// console.log(useCallback(100,2000, callback));

// const square = function (x) {
//     return x*x;
// }
// console.log(square(2));

const square = (x) => {
    return x*x;
}
console.log(square(3));