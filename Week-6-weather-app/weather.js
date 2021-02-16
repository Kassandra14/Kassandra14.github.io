var userFormEl = document.querySelector("#user-form");
var currentWeatherContainerEl = document.querySelector("#current-container");
var citySearchTerm = document.querySelector("#city-name");
var searchButton = document.querySelector("#search");
var forecastContainerEl = document.querySelector("#forecast-container");

//put a click handler on the search button
// -get the value from the search input


$('#searchButton').on("click", function getCurrentWeather (event) {
//clear current
    event.preventDefault();


    //enter a city
    var city = $("#city-name").val();



        if (city) {
            getCurrentWeather(city);

            currentWeatherContainerEl.textContent = '';
            citySearchTerm.value = '';
        } else {
            alert('Please enter a US City name');
        }
    })    

//submit query for current weather
//display current weather data elements in  current weather div

var getCurrentWeather = function (city) {
    var currentApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=cfd2430c3ee19405f5b8a3b9dd3ab7f3&mode=xml&unit=imperial";

    var requestCurrent = {
        method: 'GET',
        redirect: 'follow'
    };
    
        fetch(currentApi, requestCurrent)
            .then(response => response.json())
            .then(data => {
            var cityNameEl = document.createElement('h3')
            cityNnameEl.innerHTML = data.city.name
            currentWeatherContainerEl.appendChild(cityNameEl)
        });
    }



// var displayCurrentWeather = function (city, citySearchTerm) {
//     if (cities.length === 0) {
//         currentWeatherContainer.textContent = 'City not found.';
        
//         //citySearchTerm.textContent = searchTerm;
//         var cityEl = document.createElement('div');
//         cityEl.classList = 'list-item flex-row justify-space-between align-center';
//         currentWeatherContainerEl.appendChild(cityEl);
//     } 
// };
    


// - display current conditions
//Elements to create
//<div>container
                //  -city name, 
                // <h1>
                // -the date, 
                // <h3>
                // -an icon representation of weather conditions, 
                // -the temperature, 
                // -the humidity, 
                // -the wind speed,
                // -the UV index
                    // -present a color that indicates:
                        //- conditions are favorable, moderate, or severe





//5 day forecast should also run when city name is clicked? can they run simultaneously

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
        forecastContainerEl.appendChild(nameEl)
        var nameEl = document.createElement('h1')
        nameEl.innerHTML = data.city.name
        forecastContainerEl.appendChild(nameEl)
    })

};
    // .catch(error => console.log('error', error));

//These should display as cards below...



//when i uncomment the function call below i get error
getTheCityForecast('New York');
    

    //display five day in five day forecast div

        // - display future conditions
                // - present a 5-day forecast that displays:
                    // - the date, 
                    // - an icon representation of weather conditions, 
                    // - the temperature, 
                    // -the humidity
  

     
 //  2.  // - add city to the search history
            // - presented with current and future conditions for that city


        
        //         userFormEl.appendChild(cityButtonEl);
        //     } 
    
        
        //var cityButtonsEl = 
    
//