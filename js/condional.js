// const myMoney = "1000"; 
// const isRich = false;

// if(isRich) {
//     console.log("Tui di mua xe");
// } else if (myMoney === 1000) {
//     console.log("tui cho ban tien");
// } else {
//     console.log(" tui ngheo")
// }
const yourAge = prompt("Vui long nhap so tuoi:", "");
let message = "";
if(Number(yourAge) >= 18) {
    message = "Ban co the vao rap xem phim";
} else {
    message = "Ban khong the vao rap xem phim"
}
alert(message);