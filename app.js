const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//event listern
btn.addEventListener("click", function () {
    //get randome number between 0-3 colors[]
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    //using Math.floor we get our randome nember
    return Math.floor(Math.random() * colors.length);
}