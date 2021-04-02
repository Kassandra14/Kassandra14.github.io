var currentDay = document.getElementById("currentDay");
//var events =
var toDoList = [];
var hour9 = $("#09");

var time = moment();
// var calInput = document.querySelector("#todo-text");
// var calForm = document.querySelector("#todo-form");
// var todoList = document.querySelector("#todo-list");

//current time at start of page

currentDay = new Date();
//document.getElementById("currentDay").innerHTML = currentDay.toLocaleString();
var a= moment().format('LLLL');
console.log(currentDay);



//const textValue = JSON.parse(localStorage.getItem('09')) || ''

// WHEN I view the time blocks for that day

// THEN each time block is color-coded to indicate whether it is in the past, present, or future
//color code function

// WHEN I click into a time block
// THEN I can enter an event
//AND PUSH TO AN ARRAY OBJECT IN LOCAL STORAGE?
var saveButtons = document.querySelectorAll('.saveBtn')

saveButtons.forEach(function(el){
  el.addEventListener('click', function(evt) {
    console.log(this)
      var id = this.id.split('-')[0]
      var text = $(`#${id}-text`).val();
      console.log('TEXT-->', text)
      localStorage.setItem(`${id}-text`, JSON.stringify(text));
  })
})

function saveTask() {

    //get the value
      //put value in localStorage
  var userInput = {
      text9Input: $.trim($("#09-text").val())
  }
  window.localStorage.setItem("events", JSON.stringify(userInput));
  console.log(userInput);

};
//Pull array object back - possiblyt save or convert to list items?

function getAndRenderTasks() {

  const taskRow = document.querySelectorAll('.hour')
  taskRow.forEach(task => {
    const data = JSON.parse(localStorage.getItem(`${task.id}-text`)) || '';
    console.log(data)
    const textArea = document.getElementById(`${task.id}-text`)
    textArea.value = data
   
  })
}
// var newTask = document.getElementById("text9Input").value;
// toDoList.push(newTask);
// window.localStorage.setItem("lastInput", JSON.stringify(toDoList));
// output.innerHTML = window.localStorage.getItem("lastInput");
//event listener for save buttons. When clicked it will save user input to local storage.
//saveButton.click(saveTask);
// $("#SaveBtn").click(function (event) {
// });
// display what was stored locally
getAndRenderTasks();

//make a change or reload a todo page?
// how to call page and rerender stored data?

