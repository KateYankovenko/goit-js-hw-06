// 1)Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// 2)Для кожного элемента li.item у спику ul#categories, знайде і
// виведе в консоль текст заголовку елемента(тегу < h2 >) і кількість
// елементів в категорії(усіх < li >, вкладених в нього).

// const categoryItems = document.querySelector("#categories").children;
// console.log(`Number of categories:`, categoryItems.length);// Number of categories: 3

// const subItemElements = document.querySelectorAll(".item")
//     .forEach((el) => {
//         console.log(`Category:`, el.querySelector("h2").textContent);
//         console.log(`Elements:`, el.querySelector("ul").children.length);
// })


const categoryItems = document.querySelectorAll(".item");
console.log(`Number of categories:`, categoryItems.length);// Number of categories: 3

categoryItems.forEach((item) => {

    console.log(`Category:`, item.querySelector("h2").textContent);
    console.log(`Elements:`, item.querySelector("ul").children.length);
})


// const categoryItemsChildren = categoryItems.firstElementChild;
// console.log(categoryItemsChildren.value);

// const subItemElements = document.querySelectorAll(".item")
//     .forEach((el) => {
//         console.log(`Category:`, el.querySelector("h2").textContent);
//         console.log(`Elements:`, el.querySelector("ul").children.length);
// })

