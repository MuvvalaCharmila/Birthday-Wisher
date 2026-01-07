function showWish() {
  var name = document.getElementById("nameInput").value.trim().toLowerCase();
  var dob = document.getElementById("dobInput").value;

  var wishMessage = document.getElementById("wishMessage");
  var image = document.getElementById("bdayPic");

  wishMessage.innerText = "";
  image.style.display = "none";

  if (name === "" || dob === "") {
    alert("Please enter name and date");
    return;
  }
  var parts = dob.split("-");
  var enteredMonth = parts[1];
  var enteredDate = parts[2];  
  var today = new Date();
  var todayMonth = String(today.getMonth() + 1).padStart(2, "0");
  var todayDate = String(today.getDate()).padStart(2, "0");

  var isToday =
    enteredMonth === todayMonth && enteredDate === todayDate;

  var isCharmiDob =
    name === "charmi" && enteredMonth === "09" && enteredDate === "20";
  if (!isToday && !isCharmiDob) {
    alert("Please enter valid date");
    return;
  }
  wishMessage.innerText =
    "🎉 Happy Birthday " + name + "! 🎂 Wishing you a joyful and blessed year ahead!";

  document.body.classList.add("bg-active");
  document.getElementById("bdayMusic").play();
  if (isCharmiDob) {
    image.style.display = "block";
  }
}
