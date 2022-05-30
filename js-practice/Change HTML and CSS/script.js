let h3 = document.querySelector("h3");
h3.innerText = "New Title";

let petImg = document.querySelector("#pet-img");

function switchImg() {
  petImg.src = "dog.jpg";
}

// function setActive(element) {
//   element.style.backgroundColor = "#222222";
//   element.style.color = "#ffffff";
// }

// function setActive(element) {
//   element.classList.add("dark-mode");
// }

function setActive(element) {
  console.log(element.classList);
  if (element.classList.contains("dark-mode")) {
    element.innerText = "Cambiar al modo oscuro";
    element.classList.remove("dark-mode");
  } else {
    element.innerText = "Cambiar al modo claro";
    element.classList.add("dark-mode");
  }
}
