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
      console.clear()
      showTheWork.innerHTML = ""
      equation = ""
      display = ""
    }
  }
}

for (var i = 0; i < input.length; i++) {
  input[i].onclick = function(e) {
    let buttonValue = this.getAttribute("data-value")
    equation += buttonValue

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
  let answer = evaluateEquation(equation)
  showTheWork.textContent = answer
  equation = answer
}

let squareRoot = document.getElementById("squareRoot")
squareRoot.onclick = function() {
  let answer = Math.sqrt(evaluateEquation(equation)).toString()
  showTheWork.textContent = answer
  equation = answer
}
