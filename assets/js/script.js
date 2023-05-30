//Seleção de elementos
const passwordLengthInput = document.getElementById("passLength");
const generatePasswordButton = document.getElementById("generate-password");
const generatedPasswordElement = document.getElementById("generated-password");
const copyClipButton = document.getElementById("copyclip");
let checkNumber = document.getElementById("numberCheckInput");
let checkUpLetter = document.getElementById("upLetterCheckInput");
let checkDownLetter = document.getElementById("downLetterCheckInput");
let checkSimbol = document.getElementById("simbolCheckInput");
//Funções
function editValue(mode) {
  let number = passwordLengthInput.value
  if (mode == 1) {
    if (number < 20) {
      number++;
    }
  } else {
    if (number > 8) {
      number--;
    }
  }
  passwordLengthInput.value = number
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
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
  let passwordLength = passwordLengthInput.value;
  let generator = [];
  let password = "";
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
  if (generator.length == 0) {
    password = "Selecione alguma opção";
  }
  for (let i = 0; i < passwordLength; i++) {
    if (generator.length != 0) {
      let random = generator[getRandomInt(0, generator.length)]();
      password += random;
    }
  }

  document.getElementById("divPasswordResult").style.animation =
    "showTextArea 1s forwards";
  document.getElementById("divPasswordResult").style.display = "";
  generatedPasswordElement.querySelector("h4").innerText = password;
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
