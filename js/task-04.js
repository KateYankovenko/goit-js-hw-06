// Лічильник складається зі спану і кнопок, які по кліку повинні
// збільшувати і зменшувати його значення на одиницю.
// 1.Створи змінну counterValue, в якій буде зберігатися поточне
// значення лічильника та ініціалізуй її значенням 0.
// 2.Додай слухачів кліків до кнопок, всередині яких збільшуй або
// зменшуй значення лічильника.
// 3.Оновлюй інтерфейс новим значенням змінної counterValue.


const dataActionDecrBtn = document.querySelector('button[data-action="decrement"]');
const dataActionIncrBtn = document.querySelector('button[data-action="increment"]');
const dataValue = document.querySelector("#value");

let counterValue = 0;

const increaseValue = () => {
    counterValue += 1;
    dataValue.textContent = counterValue;
    console.log(counterValue);
}
const decreaseValue = () => {
    counterValue -= 1;
    dataValue.textContent = counterValue;
    console.log(counterValue);
}

dataActionDecrBtn.addEventListener("click", decreaseValue);
dataActionIncrBtn.addEventListener("click", increaseValue);





