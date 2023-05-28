//Seleção de elementos
const generatePasswordButton = document.getElementById('generate-password');
const generatedPasswordElement = document.getElementById('generated-password');
const copyClipButton = document.getElementById('copyclip');
//Funções

//Letras, Números, Símbolos
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
};

const getNumber = () => {
    return Math.floor(Math.random()*10).toString();
};

const getSymbols = () => {
    const symbols = "[]<>.,;:/?!@#$%&*(){}"
    return symbols[Math.floor(Math.random()*symbols.length)]
};

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbols) => {
    let password = "";
    const passwordLength = 10;

    const generator = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbols,
    ];

    for (let i = 0; i < passwordLength; i = i+4) {  
        generator.forEach(() => {
            const randomValue = 
                generator[Math.floor(Math.random()*generator.length)]();
                password += randomValue
        })
    }

    password = password.slice(0, passwordLength);
    generatedPasswordElement.style.display = "flex";
    generatedPasswordElement.style.flexDirection = "column";
    generatedPasswordElement.querySelector("h4").innerText = password;
    copyClipButton.style.borderColor = '#81d340';
    copyClipButton.style.display = "flex";
}

function copiarTexto(pass){
    let copied = document.querySelector('h4').innerText;
    navigator.clipboard.writeText(copied);
};
//Eventos
generatePasswordButton.addEventListener('click', ()=>{
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbols)
});
copyClipButton.addEventListener('click', copiarTexto);