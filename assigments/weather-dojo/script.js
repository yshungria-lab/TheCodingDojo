console.log("page loading...");

var cookieDiv = document.querySelector(".cookie-policy");

function loading() {
  alert("Loading weather report...");
}

function accept() {
  cookieDiv.remove();
}

function c2f(temp) {
  return Math.round((9 / 5) * temp + 32);
}

function f2c(temp) {
  return Math.round((5 / 9) * (temp - 32));
}

function convert(element) {
  console.log(element.value);
  for (let i = 1; i < 9; i++) {
    let tempSpan = document.querySelector("#temp" + i);
    let tempVal = parseInt(tempSpan.innerText);
    if (element.value == "°C") {
      tempSpan.innerText = f2c(tempVal);
    } else {
      tempSpan.innerText = c2f(tempVal);
    }
  }
}
