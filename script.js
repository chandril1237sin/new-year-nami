let questions = [
    "Will you smile with me every day?",
    "Will you fight with me but never leave me?",
    "Will you choose us again this year?",
    "Will you walk into this New Year with me?"
];

let current = 0;

let photos = [
  "./photos/img1.jpg",
  "./photos/img2.jpg",
  "./photos/img3.jpg",
  "./photos/img4.jpg",
  "./photos/img5.jpg",
  "./photos/img6.jpg",
  "./photos/img7.jpg"
];


function yesClicked() {
    current++;

    if (current < questions.length) {
        document.getElementById("question").innerText = questions[current];
        document.getElementById("emoji").innerText = "🥰";
    } else {
        document.querySelector(".buttons").style.display = "none";
        document.getElementById("question").style.display = "none";
        document.getElementById("emoji").style.display = "none";

        document.getElementById("finalContent").classList.remove("hidden");
        showRandomPhoto();
    }
}

function noClicked() {
    let sad = ["😭", "🥺", "😡", "💔"];
    document.getElementById("emoji").innerText =
        sad[Math.floor(Math.random() * sad.length)];
}

function moveNo() {
    let btn = document.getElementById("noBtn");
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 70 + "%";
    btn.style.top = Math.random() * 70 + "%";
}

function showRandomPhoto() {
    let img = document.createElement("img");
    img.src = photos[Math.floor(Math.random() * photos.length)];
    document.getElementById("photoBox").appendChild(img);
}


