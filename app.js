const api = {
    key: "653c24e6dea8feb9a6b4024fce11f04a",
    baseurl:"http://api.openweathermap.org/data/2.5/"

}






const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);



function setQuery(evt) {
    if(evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);

    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&unit=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
}

//test