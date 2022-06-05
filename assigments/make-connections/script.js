console.log("page loaded...");

let username = document.querySelector("#username");
let requestSpan = document.querySelector("#requests");
let connectionSpan = document.querySelector("#connections");

function edit() {
  username.innerText = "Lina María";
}

function accept(id) {
  let element = document.querySelector(id);
  element.remove();
  requestSpan.innerText--;
  connectionSpan.innerText++;
}

function ignore(id) {
  let element = document.querySelector(id);
  element.remove();
  requestSpan.innerText--;
}
