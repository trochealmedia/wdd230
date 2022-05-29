let temperature = 40
let windSpeed = 5

const chillFactor = document.querySelector(".windchill")

const windChillFahrenheit = (temperature, windSpeed) =>{

    if (temperature <= 50 && windSpeed >= 3 ){
        windChillFactor = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed,
        0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        console.log(windChillFactor)
        windChillFactor = Math.floor(windChillFactor);
        chillFactor.innerHTML = windChillFactor;

}   else if (temperature > 50 || windSpeed < 3){
        windChillFactor  = "N/A";
        console.log(windChillFactor)
        chillFactor.innerHTML = windChillFactor;
}
}
windChillFahrenheit(temperature, windSpeed)