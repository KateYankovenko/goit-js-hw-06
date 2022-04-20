function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const body = document.body;

colorBtn.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
});



// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color і 
// виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію
// getRandomHexColor.