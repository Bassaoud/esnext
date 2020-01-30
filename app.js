let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris","nyc","rome","rio-de-janeiro"];
console.log(citiesId);
//citiesId = [];
//console.log(citiesId);
citiesId.push("tokyo");
console.log(citiesId);

function getWeather(cityId){
let city = cityId.toUpperCase();
let temperature = 20;
return {city, temperature}
}
const weather = getWeather(favoriteCityId);
console.log(weather);

const {
    city : nameCity,
    temperature : tempCity
} = weather;

console.log(nameCity);
console.log(tempCity);

