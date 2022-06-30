const listEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listEl.length}`);

listEl.forEach((element) => {
    let category = element.firstElementChild.textContent;
    let elementsQuantity = element.lastElementChild.children.length;

    console.log(
        `Category: ${category} \n Elements: ${elementsQuantity}`
    );
});