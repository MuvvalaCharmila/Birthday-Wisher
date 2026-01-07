function showWish() {
  var name = document.getElementById("nameInput").value.trim().toLowerCase();
  var dob = document.getElementById("dobInput").value;

  var wishMessage = document.getElementById("wishMessage");
  var image = document.getElementById("bdayPic");
  image.style.display = "none";
  wishMessage.innerText = "";

  if (name === "" || dob === "") {
    alert("Please enter name and date");
    return;
  }
  var today = new Date();
  var todayMonth = String(today.getMonth() + 1).padStart(2, "0");
  var todayDate = String(today.getDate()).padStart(2, "0");

  var enteredMonth = dob.split("-")[1];
  var enteredDate = dob.split("-")[2];

  if (enteredMonth !== todayMonth || enteredDate !== todayDate) {
    alert("Please enter today's date to get birthday wish");
    return;
  }

  wishMessage.innerText =
    "🎉 Happy Birthday " + name + "! 🎂 Wishing you a joyful and blessed year ahead!";

  document.body.classList.add("bg-active");
  document.getElementById("bdayMusic").play();

  if (name === "charmi" && enteredMonth === "09" && enteredDate === "20") {
    image.style.display = "block";
  }
}
