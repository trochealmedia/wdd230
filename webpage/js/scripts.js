let daynames = [
    "Monday",
    "Tuesday",
    "Weendsday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

let months = [    
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " +
d.getFullYear();

document.getElementById("currentdate").textContent = fulldate;
 