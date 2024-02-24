function darklightMode() {
    var lightMode = document.body;
    var themeBtn = document.getElementById("darklightBtn");
    lightMode.classList.toggle("light-mode");
    if (themeBtn.textContent === "wb_sunny") {
      themeBtn.textContent = "brightness_2";
   } else {
    themeBtn.textContent = "wb_sunny";
   }
 }