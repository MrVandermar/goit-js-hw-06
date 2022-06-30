const inputText = document.querySelector('[data-length="6"]');
const validInput = inputText.dataset.length;


inputText.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === +validInput) {
        inputText.classList.add("valid");
        inputText.classList.remove("invalid");
    }
    else {
        inputText.classList.add("invalid");
        inputText.classList.remove("valid");
    }
    //  console.log(event.currentTarget.value.length);
    // console.log(+validInput);
});

