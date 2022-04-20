// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// 1.Яка кількість смиволів повинна бути в інпуті, зазначається в його
// атрибуті data - length.
// 2.Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// 3.Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже
// додали у вихідні файли завдання.

let inputSymbols = document.querySelector("#validation-input");

const onCheckInputLength = (event) => {

    if (event.currentTarget.value.length === Number(inputSymbols.dataset.length)) {
        inputSymbols.classList.remove("invalid");
        inputSymbols.classList.add("valid");
} else {
        inputSymbols.classList.remove("valid");
        inputSymbols.classList.add("invalid");
    }
}
inputSymbols.addEventListener("blur", onCheckInputLength);






    

// inputSymbols.addEventListener("blur", () => {

//   let inpStyle = document.querySelector("style");

//     if (inputSymbols.data-length) {
//         inpStyle.classList.add("valid");
//     } else {
//         inpStyle.classList.add("invalid");
//     }
//     return inpStyle;
// });

// const toggleInput = () => {
//     const dataSymbMax = inputSymbols.data-length;
//     if (Number(dataSymbMax)) {
//         inputSymbols.classList.toggle("valid");   
//     } else {
//           inputSymbols.classList.toggle("invalid");
//     }
// }
// inputSymbols.addEventListener("blur",toggleInput);

