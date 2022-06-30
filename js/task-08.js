const motherform = document.querySelector(".login-form");

motherform.addEventListener("submit", hendlyFormSubmit)

function hendlyFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const maill = formElements.email.value;
    const password = formElements.password.value;

    if (maill === "" || password === "") {
    return console.log("Мало буков или цыфров");
  }

    const formData = {
        maill,
        password,
    };
    console.log(formData)
    event.currentTarget.reset();
};
