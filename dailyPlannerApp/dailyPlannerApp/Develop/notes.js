

var hour9 = $("#09");
var hour6 = $("#18");
var time = moment();



// //Depending on the time of the day; the hour blocks will change color
// function colorCode() {
//     hour = time.hours();
//     $(".hour-block").each(function () {
//         var thisHour = parseInt($(this).attr("id"));

//         if (thisHour > hour) {
//             $(this).addClass("future");
//         } else if (thisHour === hour) {
//             $(this).addClass("present");
//         } else {
//             $(this).addClass("past");
//         }
//     })
// }

//colorCode();


//function save user input to local storage

function saveTask() {

    var userInput = {
        text9Input: $.trim($("#ninetext").val())
    }

    window.localStorage.setItem("events", JSON.stringify(userInput));
    console.log(userInput);
}

//function to render userinput saved to local storage



//buttons from html
var submitButton = $("button");

//event listener for save buttons. When clicked it will save user input to local storage.
submitButton.click(saveTask);
// displays what was in local storage to display on the page
renderTask();