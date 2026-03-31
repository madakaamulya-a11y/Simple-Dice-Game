var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImg = "dice" + randomNumber1 + ".png";
var randomImageSrc = "./images/" + randomImg;
var img1 = document.querySelectorAll("img")[0];
var or = img1.setAttribute("src", randomImageSrc);
console.log("js running");
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImg2 = "dice" + randomNumber2 + ".png";
var imagesrc2 = "./images/" + randomImg2;
var img2 = document.querySelectorAll("img")[1];
var or2 = img2.setAttribute("src", imagesrc2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 won🥳";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 won🥳";
} else {
  document.querySelector("h1").innerHTML = "Draw!😊";
}
