    // Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
    // Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
    // Обновляй интерфейс новым значением переменной counterValue.

const counterValue = document.querySelector("#value");
counterValue.value = 0;

const decrementValue = document.querySelector('#counter button[data-action="decrement"]');

const incrementvalue = document.querySelector('#counter button[data-action="increment"]');

const hadleDecrementButtonClick = () => {counterValue.value -= 1
counterValue.textContent = counterValue.value;};

const hadleIncrementButtonClick = () => {counterValue.value += 1
    counterValue.textContent = counterValue.value;
};

decrementValue.addEventListener('click', hadleDecrementButtonClick);
incrementvalue.addEventListener('click', hadleIncrementButtonClick);
