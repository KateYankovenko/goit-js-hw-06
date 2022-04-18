const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  mainList: document.querySelector("#ingredients"),
}

const listItem = ingredients.map(ingredient => {
  const listSubItem = document.createElement("li");
  listSubItem.textContent = ingredient;
  listSubItem.classList.add("item");
  return listSubItem;
});

refs.mainList.append(...listItem);


// HTML містить порожній список ul#ingredients.

// < ul id = "ingredients" ></ul >
//   JavaScript містить масив рядків.

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1.Створить окремий елемент < li >.Обов'язково використовуй метод 
// document.createElement().
// 2.Додасть назву інгредієнта як його текстовий вміст.
// 3.Додасть елементу клас item.
// 4.Після чого, вставить усі <li> за одну операцію у список ul.ingredients.