let str = "Hi, I'm Shashi. How can I help you?";
const text = document.querySelector("#string");
const button = document.querySelector("button");
const clear = document.querySelector("#clear");

function typeString(str, delay) {
  text.textContent = "";
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    setTimeout(() => {
      text.textContent = text.textContent + str[i];
    }, (i * delay) / 2);
  }
}

function clearString(element, delay) {
  const str = element.innerText;
  for (var i = str.length - 1, j = 0; i >= 0, j <= str.length; i--, j++) {
    setTimeout(function () {
      text.textContent = text.textContent.split("").slice(0, i).join("");
    }, (delay * j) / 2);
  }
}

button.addEventListener("click", (e) => {
  typeString(str, 50);
});

clear.addEventListener("click", (e) => {
  clearString(text, 50);
});
