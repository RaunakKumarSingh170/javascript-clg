const btn = document.querySelector("button");
const body = document.querySelector("body");
const h2 = document.querySelector("h2");

btn.addEventListener("click", function () {
    body.style.backgroundColor = "pink";
});

let data = prompt("Enter username");

console.log(data);

let isBool = true;

h2.innerText = "Hello " + data;