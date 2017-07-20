//focus on equal button

let input = document.getElementsByClassName("input")
let clear = document.getElementById("clear")

let value = document.querySelector("data-value")
let showTheWork = document.getElementById("showTheWork")
let symbol = document.getElementsByClassName("symbol")
let equation = ""
let display = ""
showTheWork.textContent = ""

clear.onclick = function() {
  addEventListener("click", window)
  {
    if (window.confirm("Are you sure you want to clear your history?")) {
      console.clear(), (showTheWork.innerHTML = ""), (equation = ""), (display = "")
    }
  }
}
console.log(equation)
console.log(display)

for (var i = 0; i < input.length; i++) {
  input[i].onclick = function(e) {
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
function evaluateEquation(equation) {
  let numbers = equation.split(/\+|\-|\*|\//g)
  let operators = equation.replace(/[0-9]|\./g, "").split("")

  let multiply = operators.indexOf("*")
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1])
    operators.splice(multiply, 1)
    multiply = operators.indexOf("*")
  }

  let divide = operators.indexOf("/")
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1])
    operators.splice(divide, 1)
    divide = operators.indexOf("/")
  }

  let add = operators.indexOf("+")
  while (add != -1) {
    numbers.splice(add, 2, parseInt(numbers[add]) + parseInt(numbers[add + 1]))
    operators.splice(add, 1)
    add = operators.indexOf("+")
  }

  let minus = operators.indexOf("-")
  while (minus != -1) {
    numbers.splice(minus, 2, parseInt(numbers[minus]) - parseInt(numbers[minus + 1]))
    operators.splice(minus, 1)
    minus = operators.indexOf("-")
  }
  return numbers[0]
}

let sum = document.getElementById("sum")
sum.onclick = function() {
  let whatever = evaluateEquation(equation).toString()
  showTheWork.textContent = whatever
  equation = whatever
}

let squareRoot = document.getElementById("squareRoot")
squareRoot.onclick = function() {
  let whatever = Math.sqrt(evaluateEquation(equation)).toString()
  showTheWork.textContent = whatever
  equation = whatever
}

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
