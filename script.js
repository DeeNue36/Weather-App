//API Key and API Url declaration
const apiKey = "15e38657459adb88c161abea88905b94 ";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//Search box and search button
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

//
const weatherIcon = document.querySelector(".weather-icon");

//Function to check the weather status
//city is passed so that when a particular place is searched for it displays the weather status for that city
async function checkWeather(city){
    //constant variable to fetch the API URL, searched city and the current API Key being used
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    //to display the error message when an invalid city has been searched
    if (response.status == 404) {
        document.querySelector(".error-message").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        // console.log(data);

        //displays the current weather information on the webpage
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "&deg;C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        //if else statement to update the weather icon i.e if it is raining, cloudy snowing etc
        if(data.weather[0].main === "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main === "Rain"){
            weatherIcon.src = "images/rain.jpg" ;
        }
        else if(data.weather[0].main === "Clear"){
            weatherIcon.src = "images/clear.jpg" ;
        }
        else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "images/drizzle.jpg" ;
        }
        else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "images/mist.jpg" ;
        }
        else if(data.weather[0].main === "Snow"){
            weatherIcon.src = "images/snow.jpg" ;
        }
    
        //to display the weather info once a city has been searched
        document.querySelector(".weather").style.display = "block";

        //to hide the error message when the city searched exists
        document.querySelector(".error-message").style.display = "none";
    }

   
}

//Event listener that updates the weather information based on the value put i n the search box once the search button is clicked
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();