var userFormEl = document.querySelector("#city");
var currentWeatherContainerEl = document.querySelector("#current-container");
var citySearchTerm = document.querySelector("#city");
var searchButton = document.querySelector("#getWeatherForcast");
var forecastContainerEl = document.querySelector("#forecast-container");
//var city = citySearchTerm.nodeValue.data




//does this have to be in a function?
//var cityButtonEl = document.createElememt("button");

// var formSubmitHandler = function (event) {
//     event.preventDefault();
//     //enter a city
//     var city = citySearchTerm;
//         if (city) {
//             getCurrentWeather(city);

//             currentWeatherContainerEl.textContent = '';
//             citySearchTerm.value = '';
//         } else {
//             alert('Please enter a US City name');
//         }
//     }    

//submit query for current weather

$(document).ready(function() {
    $("fetch-button").click(function(){
        var city = $("#city").val();
        var key = 'cfd2430c3ee19405f5b8a3b9dd3ab7f3';
        
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            type: 'GET',
            data: {q:city, appid: key, units: 'imperial'},
        }).then(function (repsonse) {
            console.log('AJAX response \n------');
            console.log(response);
        });
    });
});    

//             success: function(data) {
//                 var wf = '';
//                 $.each(data.weather, function(index, val) {
//                     wf += '<p><b>' + data.name + "</b><img src="+val.icon + ".png></p>" +
//                     data.main.temp + '&deg;F ' + ' | ' + val.main + "," + val.description
//                 });
//                 $("#showWeatherForecast").html(wf);    
//             }
//         })
//     })       
// });
// // JQuery AJAX
// $.ajax({
//     url: requestUrl,
//     method: 'GET',
//   }).then(function (response) {
//     console.log('AJAX Response \n-------------');
//     console.log(response);
//   });

// var  CurrentWeather = function getCurrentWeather() {
//     var currentApi = "https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=cfd2430c3ee19405f5b8a3b9dd3ab7f3&mode=html";

//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//     };
// fetch("api.openweathermap.org/data/2.5/weather?q=Denver&appid=cfd2430c3ee19405f5b8a3b9dd3ab7f3&mode=html", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
        
    
// //getCurrentWeather ();

// searchButton.addEventListener('click', getCurrentWeather);


// var currentApi = "https://api.openweathermap.org/data/2.5/]weather?q=" + city + "&appid=cfd2430c3ee19405f5b8a3b9dd3ab7f3&mode=html&unit=imperial";

//     //     fetch(currentApi)
//     //         .then(response => response.text())
//     //         .then(result +> console.log(result));
//     //       //  .then(data => {
//     //         // var cityNameEl = document.createElement('h3')
//     //         // cityNnameEl.innerHTML = data.city.name
//     //         // currentWeatherContainerEl.appendChild(cityNameEl)
//     //     });
        // var requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        // };  
        
        // fetch(CurrentApi, requestOptions)
        //     .then(response => response.json())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));



//display current weather data in other current weather div

// var displayCurrentWeather = function (city, citySearchTerm) {
//     if (cities.length === 0) {
//         currentWeatherContainer.textContent = 'City not found.';
        
//         //citySearchTerm.textContent = searchTerm;
//         var cityEl = document.createElement('div');
//         cityEl.classList = 'list-item flex-row justify-space-between align-center';
//         currentWeatherContainerEl.appendChild(cityEl);
//     } 
    
// var getTheCityForecast = function(city) {
//     var forecastApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=cfd2430c3ee19405f5b8a3b9dd3ab7f3&unit=imperial"; 
    
//     var requestForecast = {
//         method: 'GET',
//         redirect: 'follow'
//     };
    
//     fetch(forecastApi)
//     .then(response => response.json())
//     .then(data => {
//         var nameEl = document.createElement('h1')
//         nameEl.innerHTML = data.city.name
//         forecastContainerEl.appendChild(nameEl)
//         var nameEl = document.createElement('h1')
//         nameEl.innerHTML = data.city.name
//         forecastContainerEl.prependChild(nameEl)
//     })

// };

// getTheCityForecast('New York');
    

    //display five day in five day forecast div
    
    
    
//for (var i = 0; i < repos.length; i++) {
//  var repoName = repos[i].owner.login + '/' + repos[i].name;
// }
        

//ADDING EVENT LISTENERS

//userFormEl.addEventListener('submit', formSubmitHandler);





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
//