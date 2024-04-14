const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let button = document.getElementById("generate-btn");
let firstField = document.getElementById("password-first-el");
let secondField = document.getElementById("password-second-el");
let copyBtn = document.getElementById("copy-btn");

function createPassword() {
  for (let i = 0; i < characters.length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    let password = "";
    password += characters[randomIndex];
    firstField.textContent += password;
  }

  firstField.textContent = firstField.textContent.slice(0, 16);

  for (let i = 0; i < characters.length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    let password = "";
    password += characters[randomIndex];
    secondField.textContent += password;
  }
  secondField.textContent = secondField.textContent.slice(0, 16);
}

function copyFirstPassword() {
  const textarea = document.createElement("textarea");

  const password = firstField.innerText;

  if (!password) {
    return;
  }
  textarea.value = password;

  console.log(password);

  document.body.appendChild(textarea);
  textarea.select();

  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
}

function copySecondPassword() {
  const textarea = document.createElement("textarea");

  const password = secondField.innerText;

  if (!password) {
    return;
  }
  textarea.value = password;

  console.log(password);

  document.body.appendChild(textarea);
  textarea.select();

  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
}
