function darklightMode() {
    var element = document.body;
    var button = document.getElementById("darklightBtn");
    element.classList.toggle("light-mode");
    if (button.textContent === "wb_sunny") {
     button.textContent = "brightness_2";
   } else {
     button.textContent = "wb_sunny";
   }
 }