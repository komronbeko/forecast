const __form = document.querySelector("form");
const __search = document.querySelector("#search");
const __container = document.querySelector(".container");

const API_KEY = "e7360eba74ec469faa3163519233101";

const URLbase = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&`;

function getData(query) {
    fetch(URLbase + query).then(res=>res.json()).then(data=>displayData(data))
}

getData("q=London&aqi=no");

function displayData(city) {
    __container.innerHTML = `
    <h1 class="weather">${city.current.temp_c}°C</h1>
    <img class="img" src="${city.current.condition.icon}" alt="">
    <h2 class="text">WELCOME! IT'S CURRENTLY</h2>
    <h2 class="date">${city.location.localtime}</h2>
    <h2 class="place-name">${city.location.name}, ${city.location.country}</h2>
    `
    if (city.current.is_day >= 1){
        document.body.classList.add("day")
    } else{
        document.body.classList.add("night")
    }
}

__form.addEventListener("click", (e)=>{
    e.preventDefault();
    let query = __search.value;

    getData(`q=${query}&aqi=no`)
})