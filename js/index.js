// Your code goes here
const allPage = document.querySelector("html");



allPage.style.backgroundColor = "#6b4b3e";

window.addEventListener('load', () => {
    alert("Loaded :)")
    });

//centered logo title to screen to make it look better

const topBack = document.querySelector(".logo-heading");
console.log(topBack);

topBack.style.textAlign = "center"

//event listener to change color of h1

topBack.addEventListener('mouseover', () => {
    topBack.style.color = "#f8f4f9";
});

topBack.addEventListener('dblclick', () => {
alert("Why are you clicking me?!")
});

