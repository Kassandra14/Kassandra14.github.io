var userFormEl = document.querySelector("#city");
var currentWeatherContainerEl = document.querySelector("#current-weather");
var forecastWeatherEl = document.querySelector("#forecast-weather");

var requestOptions = {
method: 'GET',
redirect: 'follow'
};

fetch("http://api.openweathermap.org/data/2.5/weather?q=London&appid=cfd2430c3ee19405f5b8a3b9dd3ab7f3", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


var getTheCityForecast = function(city) {
    var forecastApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=cfd2430c3ee19405f5b8a3b9dd3ab7f3&unit=imperial"; 
    
    var requestForecast = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch(forecastApi)
    .then(response => response.json())
    .then(data => {
        var nameEl = document.createElement('h1')
        nameEl.innerHTML = data.city.name
        forecastWeatherEl.appendChild(nameEl)
        var nameEl = document.createElement('h1')
        nameEl.innerHTML = data.city.name
        forecastWeatherEl.appendChild(nameEl)
    })

};

getTheCityForecast('New York');

    var currentWeatherEl = document.getElementById('current-weather');
    var fetchButton = document.getElementById('fetch-button');
    var cityHistory = document.querySelector('cities')
    var searchList = document.querySelector('ul');


    function getApi(London) {
      // fetch results for a city
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + value + "&unit=imperial&appid=cfd2430c3ee19405f5b8a3b9dd3ab7f3";
    
    fetch(requestUrl)
        .then(function (response) {
        return response.json();
        })
        // .then(function (data) {
        // console.log(data)


        .then(function (data) {
            var nameEl = document.createElement('h3')
            nameEl.innerHTML = data.weather.value
            currentWeatherEl.appendChild(nameEl)
            var nameEl = document.createElement('h3')
            nameEl.innerHTML = data.weather.value
            currentWeatherEl.appendChild(nameEl)
        //works to here
        //Loop over the data to generate a table, each table row will have a link to the repo url
        // for (var i = 0; i < data.length; i++) {
        // // Creating elements, tablerow, tabledata, and anchor
        // var createTableRow = document.createElement('tr');
        // var tableData = document.createElement('td');
        // var current = document.createElement('H3');



        // Setting the text of link and the href of the link
        // link.textContent = data[i].html_url;
        // link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        currentWeatherEl.appendChild(nameEl);
        })
    };


    fetchButton.addEventListener('click', getApi)