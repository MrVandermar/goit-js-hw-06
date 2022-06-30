const motherform = document.querySelector(".login-form");

motherform.addEventListener("submit", hendlyFormSubmit)

function hendlyFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const maill = formElements.email.value;
    const password = formElements.password.value;

    if (maill === "" || password === "") {
    return alert("Мало буков или цыфров :P");
  }

    const formData = {
        maill,
        password,
    };
    console.log(formData)
    event.currentTarget.reset();
};
