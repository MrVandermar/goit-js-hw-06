    // Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
    // Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
    // Обновляй интерфейс новым значением переменной counterValue.

const counterValue = document.querySelector("#value");
counterValue.value = 0;

const decrementValue = document.querySelector('#counter button[data-action="decrement"]');

const incrementValue = document.querySelector('#counter button[data-action="increment"]');

decrementValue.addEventListener("click", () => {counterValue.value -= 1
counterValue.textContent = counterValue.value;});

incrementValue.addEventListener("click", () => {counterValue.value += 1
counterValue.textContent = counterValue.value;});
