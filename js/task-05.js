const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

// function onTextInput(event) {
//     if (event.currentTarget.value === "")
//     { textOutput.textContent = "Anonymous" }
//     else { textOutput.textContent = event.currentTarget.value };
// };

const onTextInput = event => event.currentTarget.value === "" ? textOutput.textContent = "Anonymous" : textOutput.textContent = event.currentTarget.value;

textInput.addEventListener("input", onTextInput);


