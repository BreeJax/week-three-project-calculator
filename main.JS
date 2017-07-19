//focus on equal button

let input = document.getElementsByClassName("input")
let clear = document.getElementById("clear")

clear.onclick = function() {
  addEventListener("click", window)
  {
    if (window.confirm("Are you sure you want to clear your history?")) {
      console.clear(), (showTheWork.innerHTML = "")
    }
  }
}

let value = document.querySelector("data-value")
let showTheWork = document.getElementById("showTheWork")
let symbol = document.getElementsByClassName("symbol")
let equation = ""
let display = ""
showTheWork.textContent = ""

for (var i = 0; i < input.length; i++) {
  input[i].onclick = function(e) {
    console.log(value)
    var buttonValue = this.getAttribute("data-value")
    equation += buttonValue
    console.log(e.target.classList)

    if (e.target.classList.contains("symbol")) {
      showTheWork.textContent = ""
    } else {
      showTheWork.textContent += buttonValue
    }
  }
}
let b_equal = document.getElementById("sum")
b_equal.onclick = function() {
  console.log("=")
  //looking at equation string
  //need function fort string and returns summed equation
  //take equation and show in the display
  //cry
  //set equation to sum
}

// function showTheWork(clicking) {
//   let numberClicked = clicking.target.data_value
//   let OperationClicked = clicking.target.id
//   showTheWork.innerHTML += numberClicked
//   showTheWork.innerHTML += OperationClicked
// }

// function square(num) {
//   return num * num
// }
// square(42)
//
// numbers = [1, 42, 99, 100, 3]
// numbers.map(square)
//
// numbers.filter(function(num)) {
//    return num > 42
//  }
//
//  map is to transform, filter is to filter
//
//  find is to find the first of a thing- returns undefined if there is nothing there.
//
//  filter returns an empty array if there is nothing there.
//
//  filter function is a callback
//
//  for js let button = document.querySelector("button")
//
// let event = click
// function callblack ()
//  button.addEventlistener(event, callback)

// forEach just passes the elements to the function over and over again
// forEach- goes through the array, does something for each element, returns 'undefined'
// # map goes thought the array, returns an array where each elementis equal to the original element evaluated by the function
// map and forEach are similar except map gather up the function

// let calculatorButtons = {
//   "0": 0,
//   ".": ".",
//   "=": "sum",
//   "1": 1,
//   "2": 2,
//   "3": 3,
//   "-": "-",
//   "4": 4,
//   "5": 5,
//   "6": 6,
//   x: "*",
//   "7": 7,
//   "8": 8,
//   "9": 9,
//   "/": "/",
//   C: "clearInput",
//   Blank: "input",
//   "+": "+"
// }
//
// function buildAcalculator() {
//   let button = document.createElement("button")
//   for (var i = 0; i < calculatorButtons.length; i++) {
//     if ((calculatorButtons[i] === 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".")) {
//       let button = document.createElement("button")
//       button.value = calculatorButtons[i].value
//       document.querySelector("table").appendChild(button)
//     }
//   }
// }
//
// textarea.placeholder = formData[i].label
// document.getElementById("fields").appendChild(textarea)
