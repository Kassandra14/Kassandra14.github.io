var currentCity = $("#current-weather").children(".row").children(".city");
var displayedDate = $("#current-weather").children(".row").children(".date");
var currentWeatherIcon = $("#current-icon");
var currentTemp = $("#current-weather").children(".row").children(".temperature");
var currentHumidity = $("#current-weather").children(".row").children(".humidity");
var currentWind = $("#current-weather").children(".row").children(".wind");
var currentUvi = $("#current-weather").children(".row").children(".uvi");

var userFormEl = document.querySelector("#city");

var cityName = $("#city-name").val();

var searchButton = document.querySelector("#search-button");
var ls = window.localStorage

var citySearchHistory = JSON.parse(ls.getItem('citySearchHistory')) || [];



var lonCoordinates = "";
var latCoordinates = "";




//event listener on button should fetch current and forecast weater info of searched city

//get current weather information when click on search button
$('#search-button').on("click", function(event) {
    clearCurrent();
    event.preventDefault();       
//         //enter a city

        var city = $("#city-name").val();

       
         //put into local storage
         citySearchHistory.push(city)
         ls.setItem('citySearchHistory', JSON.stringify(citySearchHistory))
//loop through citySearchHistory
    //create a new button with a name and an onclick
        //append it to the search history dom el

         //create dom element to retrieve city as a button to append to the card body

        //  if (localStorage.getItem(city)) {

        //     createSearchHistory(localStorage.getItem(city));

        //  }
         
         getCurrentWeatherData(city);
         createSearchHistory(city);
         getWeatherIcon(city);
  });

//get current weather data function

function getCurrentWeatherData(cityName) {

    
    
    clearCurrent();

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=cfd2430c3ee19405f5b8a3b9dd3ab7f3')
    
    //fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latCoordinates + '&lon='  + lonCoordinates + '&appid=d98badc946d5bab20021e4552ce1d082')

    .then(function (response) {
        if(response.cod === '404') {
            $('#city-name').val('')
            alert('Please enter a valid city name')
            
        }
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            var searchedCity = data.name;
            currentCity.append(searchedCity);

            var unixDate = data.dt;
            var readableDate = convertDate(unixDate)
           displayedDate.append(readableDate)
              

            var searchedTemp = data.main.temp;
            currentTemp.append(searchedTemp + " F" );
            console.log(data.main.temp);

            var searchedHumidity = data.main.humidity;
            currentHumidity.append(searchedHumidity + " %" );
            console.log(data.main.humidity);
            var searchedWind = data.wind.speed;
            currentWind.append(searchedWind + " mph");
            
            
            var searchedLonCoor = data.coord.lon;
            lonCoordinates = searchedLonCoor;

            var searchedLatCoor = data.coord.lat;
            latCoordinates = searchedLatCoor;
            var searchedUvi = data.main.uvi
            currentUvi.append(searchedUvi);
            //console.log(current.uvi);

            var searchedIcon = data.weather.icon;
            currentWeatherIcon.append(searchedIcon)
            console.log(data.weather.icon);

    //weather icon 
            var iconCode = data.weather[0].icon;
            //console.log('ICON CODE ---> ', iconCode)
            var iconUrl = 'http://openweathermap.org/img/wn/' + iconCode + '@2x.png';
        
            currentWeatherIcon.append($('img').attr('src',iconUrl));

            getFiveDayForecastData(cityName);
            })
        }

//five day forecast info 

function getFiveDayForecastData(cityName) {

    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };
              
       fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latCoordinates + '&lon=' + lonCoordinates + '&exclude=minutely,hourly,alerts&units=imperial&appid=519f87e1804e397b8b29deaf887fdfc3', requestOptions)
                   .then(response => response.json())
                //.then(result => console.log(result))
               // .catch(error => console.log('error', error)
                

                .then(function (forecastData) {
                console.log(forecastData);
            
        
                for (i = 1; i < 6; i++) {

                 var forecastDate = $("#forecast-block-" + [i]).children(".forecast-date")
                var forecastDateData  = convertDate(forecastData.daily[i].dt);
                    console.log('forecastData', forecastData)
                forecastDate.text(forecastDateData);
                
                // var date = new Date(forecastDateData * 1000);
                // var year = date.getFullYear();
                // var month = date.getMonth() +1;
                // var day = date.getDate();
                // var convertedForecastDate =  month + "/" + day + "/" + year;
                // forecastDate.append(convertedforecastDate);
                //};
                
                
                var forecastTemp = $("#forecast-block-" + [i]).children(".temperature");
                var forecastTempData = forecastData.daily[i].temp.day;
                forecastTemp.html("Temp: " + forecastTempData + " F");
                // forecastTemp.text();

                var forecastHumidity = $("#forecast-block-" + [i]).children(".humidity");
                var forecastHumidityData = forecastData.daily[i].humidity;
                forecastHumidity.text("Humidity: " + forecastHumidityData + " %")
                // forecastHumidity.(forecastHumidityData + " %");

                var forecastIcon = $("#forecast-block-" + [i]).children(".forecast-icon");
                var forecastIconData = forecastData.daily[i].weather[0].icon;
                var forecastIconUrl = 'http://openweathermap.org/img/wn/' + forecastIconData + '@2x.png';
                forecastIcon.attr("src", forecastIconUrl);

          // -present a color that indicates:                    
          //- conditions are favorable, moderate, or severe
                var searchedUvi = forecastData.current.uvi
                currentUvi.text('UV Index: ' + searchedUvi)

                var forecastUvi = $("#forecast-block-" + [i]).children(".uvi");
                var forecastUviData = forecastData.daily[i].uvi

                forecastUvi.text('UV Index: ' + forecastUviData)
                if (searchedUvi >3 && searchedUvi <7) {
                    currentUvi.addClass('yellow');
                } else if (searchedUvi <=3) {
                    currentUvi.addClass('green').removeClass("yellow red");
                } else if (searchedUvi >=7) {
                    currentUvi.addClass("red").removeClass("green yellow");
                };
            //currentUvi.append(searchedUvi);
            };

        });
};



// //function to get weather icon to add to card
function getWeatherIcon(city)  {
};


//Clear current weather values

function clearCurrent() {

    currentCity.text("");
    displayedDate.text("");
    currentTemp.text("Temperature: ");
    currentHumidity.text("Humidity: ");
    currentWind.text("Wind Speed: ");
    currentUvi.text("UV Index: ");
    
};

function clearFiveDay() {
    const arrayOfBlocks = $('.forecast-card')

    console.log('array of Blocks- ---> ', arrayOfBlocks)


}
     

// };
//save last seached city name to be used for history section when page loads
//  add city to the search history
// Saves the last searched city name to be used for the history section when page is reloaded
// get current and forecast data for searched cities

function createSearchHistory(city) {

    var historyBtn = $("<li>", { "class": "button" }).text(city);
    historyBtn.click(function(event) {
        clearCurrent();
        clearFiveDay();
        getFiveDayForecastData(city);
        getCurrentWeatherData(city); 

        historyBtn.addClass('list');
    })
    $("#historySearchBtn").prepend(historyBtn);
};

// Populates weather for last searched city when button is clicked
$("#historySearchBtn").click(function (event) {
    //localStorage.setItem("city", event.target.textContent);

    //currentWeatherData(event.target.textContent)
});


//Convert weather date to better format
function convertDate(fetchedDate) {

    var date = new Date(fetchedDate * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() +1;
    var day = date.getDate();
    var convertedDate =  month + "/" + day + "/" + year;
    // displayedDate.append(convertedDate);
    return convertedDate
};   

//create image element in html
    // var iconCode = data.weather[0].icon;
    // $("#iconCode").attr("src", iconUrl);
  //$("#current-icon").append(iconCode);
  // //create src attribute in the img element            
//     var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
//
//cityButtonEl.addEventListener('click', buttonClickHandler);
        
        
        //this part not workikng
        // var buttonClickHandler = function(event) {
        //     cityButtonEl.classList = 'list-item flex-row justify-space-between align-center';
        
        //         userFormEl.appendChild(cityButtonEl);
        //     } 
        
        //also need to add a function here to append create a button of city entered and append below search field so when clicked on it loads weather data for that city - would these be an array? checkout todo list assignment
        //
        
        //var cityButtonsEl = 
        
        //var buttonClickHandler = function (event) {
        //    var cityEl = event.target.getAttribute('city');