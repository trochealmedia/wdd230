// let daynames = [
//     "Monday",
//     "Tuesday",
//     "Weendsday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday"
// ];

// let months = [    
//     "January",
//     "February",
//     "March",
//     "April",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ]; 

let d = new Date();
let fulldate = d.getFullYear();
document.getElementById("currentdate").textContent = fulldate;

const Update = document.lastModified
document.querySelector("#update").textContent = Update;
