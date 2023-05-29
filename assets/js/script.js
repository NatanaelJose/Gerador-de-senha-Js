//Seleção de elementos
const generatePasswordButton = document.getElementById("generate-password");
const generatedPasswordElement = document.getElementById("generated-password");
const copyClipButton = document.getElementById("copyclip");
let checkNumber = document.getElementById("numberCheckInput");
let checkUpLetter = document.getElementById("upLetterCheckInput");
let checkDownLetter = document.getElementById("downLetterCheckInput");
let checkSimbol = document.getElementById("simbolCheckInput");
//Funções

//Letras, Números, Símbolos
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

const getSymbols = () => {
  const symbols = "[]<>.,;:/?!@#$%&*(){}";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = () => {
  let generator = [];
  let password = "";
  const passwordLength = 10;
  if (checkNumber.checked == true) {
    generator.push(getNumber);
  }
  if (checkUpLetter.checked == true) {
    generator.push(getLetterUpperCase);
  }
  if (checkDownLetter.checked == true) {
    generator.push(getLetterLowerCase);
  }
  if (checkSimbol.checked == true) {
    generator.push(getSymbols);
  }
  for (let i = 0; i < passwordLength; i++) {
    generator.forEach(() => {
      const randomValue =
        generator[Math.floor(Math.random() * generator.length)]();
      password += randomValue;
    });
  }

  password = password.slice(0, passwordLength);
  document.getElementById("divPasswordResult").style.animation =
    "showTextArea 1s forwards";
  document.getElementById("divPasswordResult").style.display = "";
  //   generatedPasswordElement.style.display = "flex";
  //   generatedPasswordElement.style.flexDirection = "column";
  generatedPasswordElement.querySelector("h4").innerText = password;
  //   copyClipButton.style.borderColor = "#81d340";
  //   copyClipButton.style.display = "flex";
};

function copiarTexto(pass) {
  let copied = document.querySelector("h4").innerText;
  navigator.clipboard.writeText(copied);
}
//Eventos
generatePasswordButton.addEventListener("click", () => {
  generatedPasswordElement.style.animation = "showPasswordArea 1s forwards";
});
copyClipButton.addEventListener("click", copiarTexto);
generatedPasswordElement.style.height = "0em";
