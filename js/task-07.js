const fontSizeControl = document.querySelector("#font-size-control");
const targetText = document.querySelector("#text");

const handleChangeText = event => 
    {let textSizeControl = event.currentTarget.value;
targetText.style.fontSize = `${textSizeControl}px`;}
 

fontSizeControl.addEventListener("input", handleChangeText)

