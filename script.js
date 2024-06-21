let buttons = document.querySelectorAll(".button");

for (let button of buttons) {
    button.onmouseover = function() {
        button.classList.add("hover");
    }
    button.onmouseout = function() {
        button.classList.remove("hover");
    }
}