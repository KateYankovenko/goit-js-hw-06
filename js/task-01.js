// 1)Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.


const categoryItems = document.querySelector("#categories").children;
console.log(`Number of categories:`, categoryItems.length);// Number of categories: 3


// 2)Для кожного элемента li.item у спику ul#categories, знайде і
// виведе в консоль текст заголовку елемента(тегу < h2 >) і кількість
// елементів в категорії(усіх < li >, вкладених в нього).

const subItemElements = document.querySelectorAll(".item")
    .forEach((el) => {
        console.log(`Category:`, el.querySelector("h2").textContent);
        console.log(`Elements:`, el.querySelector("ul").children.length);
})

