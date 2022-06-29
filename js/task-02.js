
// Напиши скрипт, который для каждого элемента массива ingredients:

//     Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//     Добавит название ингредиента как его текстовое содержимое.
//     Добавит элементу класс item.
//     После чего вставит все < li > за одну операцию в список ul#ingredients.
    

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const parentList = document.querySelector(`#ingredients`);

;

const createIngredientMarkup = (array) => {
  return array.map((arrayElement) => {
    const element = document.createElement("li");
    element.classList.add("item");
    element.textContent = arrayElement;
    return element;
  });
  };

  parentList.append(...createIngredientMarkup(ingredients));

console.log(createIngredientMarkup(ingredients))


