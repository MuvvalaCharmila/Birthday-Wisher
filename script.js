function showWish() {
  var name = document.getElementById("nameInput").value;
  var message = "🎉 Happy Birthday " + name + "! 🎂 Wishing you a joyful and blessed year ahead!";

  document.getElementById("wishMessage").innerText = message;
  document.getElementById("bdayPic").style.display = "block";

  // ✅ Background change after click
  document.body.classList.add("bg-active");

  // ✅ Play music
  var music = document.getElementById("bdayMusic");
  music.play();
}