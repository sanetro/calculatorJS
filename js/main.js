function numberClickListener(char) {
  return (event) => {
    const element = document.querySelector("#number");
    if (element.innerText === '0') {
      element.innerText = char;
    } else {
      element.innerText = element.innerText + char;
    }
    event.target.classList.add("button-active");
    setTimeout(() => {
      event.target.classList.remove("button-active");
    }, 100);
  };
}

function operationClickListener(operation) {
  return (event) => {
    const resultElement = document.querySelector("#result");
    const numberElement = document.querySelector("#number");

    resultElement.innerText = numberElement.innerText;
    numberElement.innerText = '0';
    document.querySelector("#operation").innerText = operation;
    event.target.classList.add("button-active");
    setTimeout(() => {
      event.target.classList.remove("button-active");
    }, 100);
  }
}

document.querySelector("#equal-button").addEventListener("click", (event) => {
  const resultElement = document.querySelector("#result");
  const numberElement = document.querySelector("#number");

  const result = parseFloat(resultElement.innerText);
  const number = parseFloat(numberElement.innerText);

  let newResult;
  const operation = document.querySelector("#operation").innerText;

  switch (operation) {
    case '+':
      newResult = add(result, number);
      break;
    case '-':
      newResult = subtract(result, number);
      break;
    case '*':
      newResult = multiply(result, number);
      break;
    case ':':
      newResult = divide(result, number);
      break;
    default:
      newResult = result;
  }

  resultElement.innerText = newResult;
  numberElement.innerText = '0';
  event.target.classList.add("button-active");
  setTimeout(() => {
    event.target.classList.remove("button-active");
  }, 100);
});

// operation on keyboard
document.querySelector("#one-button").addEventListener("click", numberClickListener(1));
document.querySelector("#two-button").addEventListener("click", numberClickListener(2));
document.querySelector("#three-button").addEventListener("click", numberClickListener(3));
document.querySelector("#four-button").addEventListener("click", numberClickListener(4));
document.querySelector("#five-button").addEventListener("click", numberClickListener(5));
document.querySelector("#six-button").addEventListener("click", numberClickListener(6));
document.querySelector("#seven-button").addEventListener("click", numberClickListener(7));
document.querySelector("#eight-button").addEventListener("click", numberClickListener(8));
document.querySelector("#nine-button").addEventListener("click", numberClickListener(9));
document.querySelector("#zero-button").addEventListener("click", numberClickListener(0));

document.querySelector("#plus-button").addEventListener("click", operationClickListener('+'));
document.querySelector("#minus-button").addEventListener("click", operationClickListener('-'));
document.querySelector("#multiply-button").addEventListener("click", operationClickListener('*'));
document.querySelector("#divide-button").addEventListener("click", operationClickListener(':'));

// keyboard
document.addEventListener("keydown", (event) => {
  const key = event.key;
  let targetButton;

  switch (key) {
    case '1':
      targetButton = document.querySelector("#one-button");
      break;
    case '2':
      targetButton = document.querySelector("#two-button");
      break;
    case '3':
      targetButton = document.querySelector("#three-button");
      break;
    case '4':
      targetButton = document.querySelector("#four-button");
      break;
    case '5':
      targetButton = document.querySelector("#five-button");
      break;
    case '6':
      targetButton = document.querySelector("#six-button");
      break;
    case '7':
      targetButton = document.querySelector("#seven-button");
      break;
    case '8':
      targetButton = document.querySelector("#eight-button");
      break;
    case '9':
      targetButton = document.querySelector("#nine-button");
      break;
    case '0':
      targetButton = document.querySelector("#zero-button");
      break;
    case '.':
      targetButton = document.querySelector("#dot-button");
      break;
    case '+':
      targetButton = document.querySelector("#plus-button");
      break;
    case '-':
      targetButton = document.querySelector("#minus-button");
      break;
    case '*':
      targetButton = document.querySelector("#multiply-button");
      break;
    case '/':
      targetButton = document.querySelector("#divide-button");
      break;
    case 'Enter':
      targetButton = document.querySelector("#equal-button");
      break;
    case 'Backspace':
      targetButton = document.querySelector("#remove-last-char-button");
      break;
    case 'Delete':
      targetButton = document.querySelector("#remove-all-button");
     break;
    default:
      targetButton = null;
  }

  if (targetButton) {
    targetButton.click();
    targetButton.classList.add("button-active");
    setTimeout(() => {
      targetButton.classList.remove("button-active");
    }, 100);
  }
});
