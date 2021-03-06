let dataArr;

const loader = document.querySelector(".preloader")

function displayLoading() {
  loader.classList.add("display")
  
}

function hideLoading() {
  loader.classList.remove("display")
}



const requestURL = `https://the-trivia-api.com/api/questions`;
displayLoading()
fetch(requestURL)
  .then((response) => response.json())
  .then((response) => {
    dataArr = response;
    showInfo(dataArr);
    hideLoading()
  });
   
  




let allCorrectAnswers = [];
function showInfo(data) {
  let spanCat = document.createElement("p");
  spanCat.innerHTML = `Your category:<br> ${data[0].category}`;
  document.querySelector("#questions_box").appendChild(spanCat);
  let spanQuest = document.createElement("p");
  spanQuest.innerHTML = `Your question:<br> ${data[0].question}`;
  document.querySelector("#questions_box").appendChild(spanQuest);
  let containerAllAnswers = [...data[0].incorrectAnswers];
  containerAllAnswers.push(data[0].correctAnswer);
  containerAllAnswers = containerAllAnswers.sort();
  console.log(containerAllAnswers);
  let buttonsDiv = document.createElement("div");
  buttonsDiv.className = 'buttons_box';
  buttonsDiv.inner = containerAllAnswers.map((item, index) => {
    let input = document.createElement("input");
    input.className = "btn";
    input.onchange = addAnswer;
    input.addEventListener("onchange", addAnswer, false);
    input.type = "radio";
    input.id = `${item}id`;
    input.value = `${item}`;
    input.name = "inputOption";
    buttonsDiv.appendChild(input);
    let label = document.createElement("label");
    label.innerHTML = `${item}`;
    label.className = "options";
    label.for = `${item}id`;
    buttonsDiv.appendChild(label);
  });
  document.querySelector("#questions_box").appendChild(buttonsDiv);
  let arrCorrectAnswer = [];
  data.map((item) => arrCorrectAnswer.push(item.correctAnswer));
  console.log(arrCorrectAnswer);
  allCorrectAnswers = [...arrCorrectAnswer];
}
let indexQuestion = 0;

let arrAnswer = [];

function addAnswer(event) {
  let a = event.target.value;
  arrAnswer.push(a);
}

console.log(arrAnswer);

document.querySelector("#next").addEventListener("click", nextQuestion, false);
document
  .querySelector("#prev")
  .addEventListener("click", previousQuestion, false);

function nextQuestion() {
  if (indexQuestion >= dataArr.length) {
    checkAnswer();
  }

  let elementInfo = document.getElementById("questions_box");
  while (elementInfo.firstChild) {
    elementInfo.removeChild(elementInfo.firstChild);
  }

  ++indexQuestion;

  let spanCat = document.createElement("p");
  spanCat.innerHTML = `Your category:<br> ${dataArr[indexQuestion].category}`;
  document.querySelector("#questions_box").appendChild(spanCat);
  let spanQuest = document.createElement("p");
  spanQuest.innerHTML = `Your question:<br> ${dataArr[indexQuestion].question}`;
  document.querySelector("#questions_box").appendChild(spanQuest);
  let containerAllAnswers = [...dataArr[indexQuestion].incorrectAnswers];
  containerAllAnswers.push(dataArr[indexQuestion].correctAnswer);
  containerAllAnswers = containerAllAnswers.sort();
  console.log(containerAllAnswers);
  let buttonsDiv = document.createElement("div");
  buttonsDiv.inner = containerAllAnswers.map((item, index) => {
    let input = document.createElement("input");
    input.className = "btn";
    input.onchange = addAnswer;
    input.addEventListener("onchange", addAnswer, false);
    input.type = "radio";
    input.id = `${item}id`;
    input.value = `${item}`;
    input.name = "inputOption";
    buttonsDiv.appendChild(input);
    let label = document.createElement("label");
    label.innerHTML = `${item}`;
    label.className = "options";
    label.for = `${item}id`;
    buttonsDiv.appendChild(label);
    document.querySelector("#questions_box").appendChild(buttonsDiv);
  });
}

function previousQuestion() {
  if (indexQuestion >= dataArr.length) {
    checkAnswer();
  }

  let elementInfo = document.getElementById("questions_box");
  while (elementInfo.firstChild) {
    elementInfo.removeChild(elementInfo.firstChild);
  }

  --indexQuestion;

  let spanCat = document.createElement("p");
  spanCat.innerHTML = `Your category:<br> ${dataArr[indexQuestion].category}`;
  document.querySelector("#questions_box").appendChild(spanCat);
  let spanQuest = document.createElement("p");
  spanQuest.innerHTML = `Your question:<br> ${dataArr[indexQuestion].question}`;
  document.querySelector("#questions_box").appendChild(spanQuest);
  let containerAllAnswers = [...dataArr[indexQuestion].incorrectAnswers];
  containerAllAnswers.push(dataArr[indexQuestion].correctAnswer);
  containerAllAnswers = containerAllAnswers.sort();
  console.log(containerAllAnswers);
  let buttonsDiv = document.createElement("div");
  buttonsDiv.inner = containerAllAnswers.map((item, index) => {
    let input = document.createElement("input");
    input.className = "btn";
    input.onchange = addAnswer;
    input.addEventListener("onchange", addAnswer, false);
    input.type = "radio";
    input.id = `${item}id`;
    input.value = `${item}`;
    input.name = "inputOption";
    buttonsDiv.appendChild(input);
    let label = document.createElement("label");
    label.innerHTML = `${item}`;
    label.className = "options";
    label.for = `${item}id`;
    buttonsDiv.appendChild(label);
    document.querySelector("#questions_box").appendChild(buttonsDiv);
  });
}

document.querySelector("#get").addEventListener("click", checkAnswer, false);

function checkAnswer() {
  let counter = 0;
  arrAnswer.map((item) => {
    if (allCorrectAnswers.indexOf(item) >= 0) {
      counter++;
    }
  });
  let resultText = document.createElement("div");
  resultText.className = "result";
  resultText.innerHTML = `<p>Cool! Correct Answers: ${counter}!</p> `;
  document.body.append(resultText);
}

// console.log(arrAnswer);
// console.log(allQuestions);
