//let count1 = 9;
let countElement1 = document.querySelector("#count-1");
// console.log(countElement1);
let numero1 = countElement1.childNodes[0].data;
// console.log(numero1, "ESTO");
// console.log(typeof numero1);

function add1() {
  numero1++;
  countElement1.innerText = numero1 + " " + "Like(s)";
}

let countElement2 = document.querySelector("#count-2");
let numero2 = countElement2.childNodes[0].data;

function add2() {
  numero2++;
  countElement2.innerText = numero2 + " " + "Like(s)";
}

let countElement3 = document.querySelector("#count-3");
let numero3 = countElement3.childNodes[0].data;

function add3() {
  numero3++;
  countElement3.innerText = numero3 + " " + "Like(s)";
}
