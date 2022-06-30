function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(getRandomHexColor())


const bodyColor = document.body;

const colorBodyChangeButton = document.querySelector(".change-color");

const colorBodyInfo = document.querySelector(".color");

const changeColorBody = () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  colorBodyInfo.textContent = getRandomHexColor();
}

colorBodyChangeButton.addEventListener("click", changeColorBody);



