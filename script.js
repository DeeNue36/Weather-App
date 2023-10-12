const apiKey = "15e38657459adb88c161abea88905b94 ";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=lagos";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = data.main.temp + "&deg;C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

checkWeather();