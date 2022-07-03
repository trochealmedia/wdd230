let temp=document.querySelector("#temperature");
let wind=document.querySelector("#wind");
let windChill=document.querySelector("#wind-chill");
const weatherImg=document.querySelector("#weather-img");
const description=document.querySelector("#w_description");
var temperature
var wSpeed


//Using Weather API to display weather
const url= "https://api.openweathermap.org/data/2.5/weather?q=LaPaz,BOL&appid=4f11aabf1104c85c9f0ee8d532195797&units=imperial";

async function getJson(){
    let response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayTemp(data)
}
};
getJson()

function displayTemp(LaPaz){
    temp.innerHTML= `<p>${LaPaz.main.temp.toFixed(0)} &deg;F</p>`;
    wind.innerHTML=`${LaPaz.wind.speed} mPH`;
    weatherImg.setAttribute("src",`https://openweathermap.org/img/wn/${LaPaz.weather[0].icon}.png`);
    weatherImg.setAttribute("alt",`${LaPaz.weather[0].description}`);
    description.innerHTML=`<h3>${LaPaz.weather[0].description}</h3>`;
    temperature=parseInt(LaPaz.main.temp);
    wSpeed=parseFloat(LaPaz.wind.speed);
    Chill()
};

//Windchill Formula
function Chill(){
    const chillFormula=35.74+(0.6215*temperature)-(35.75*wSpeed**0.16)+(0.4275*temperature*wSpeed**0.16);
    if (temperature > 50 || wSpeed < 3.0){
        windChill.innerHTML="N/A";
        //windChill.innerHTML=`<p>${chillFormula.toFixed(2)} °F</p>`;
    } else{
        //windChill.innerHTML="<p>N/A</p>";
        windChill.innerHTML=`${chillFormula.toFixed(2)} °F`;
    };
};
