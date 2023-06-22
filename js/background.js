const images = [
    "0.jpeg","1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg",
]

const loginImages = [
    "login-0.jpeg", "login-1.jpeg", "login-2.jpeg",
]

let chosenImage;

if (savedUsername === null) {
    chosenImage = loginImages[Math.floor(Math.random() * loginImages.length)];   
} else {
    chosenImage = images[randomNumber];
}



const bgImage = document.createElement("img");

bgImage.id = "bgImage";

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);