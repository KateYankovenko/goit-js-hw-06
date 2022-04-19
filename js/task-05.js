// Напиши скрипт, який під час набору тексту
// в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися
// рядок "Anonymous".


const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    textOutput.textContent = event.currentTarget.value;
    console.log(textOutput.textContent);
});

// console.log(textInput.textContent);

// const revealUserName = (nameInput, nameOutput) => {
    
//     // if (nameInput === "") {
//     //     nameOutput.textContent = "Anonymous";
//     // } else {
//     //     nameOutput.textContent = nameInput.value;
//     // }
    
//    return (nameOutput==="") ? "Anonymous" : nameInput.value;   
// }

// nameInput.addEventListener("input", revealUserName);


