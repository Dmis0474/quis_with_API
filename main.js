let dataArr;

const xhr = new XMLHttpRequest();
const requestURL = `https://the-trivia-api.com/api/questions`;
xhr.open("GET", requestURL);
xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4 || xhr.status !== 200) {
    return;
  } else {
    const response = JSON.parse(xhr.response);
    dataArr = response;
    console.log(dataArr);
  }
};
xhr.send();

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(dataArr);
  }, 3000);
});

let allCorrectAnswers =[]
myPromise.then(
  (result) => {
    let spanCat = document.createElement("p");
    spanCat.innerHTML = `Your category: ${dataArr[0].category}`;
    document.querySelector("#questions_box").appendChild(spanCat);
    let spanQuest = document.createElement("p");
    spanQuest.innerHTML = `Your question: ${dataArr[0].question}`;
    document.querySelector("#questions_box").appendChild(spanQuest);
    let containerAllAnswers = [...dataArr[0].incorrectAnswers];
    containerAllAnswers.push(dataArr[0].correctAnswer);
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
      label.for = `${item}id`;
      buttonsDiv.appendChild(label);
    });
    document.querySelector("#questions_box").appendChild(buttonsDiv);
    let arrCorrectAnswer = [];
    dataArr.map((item) => arrCorrectAnswer.push(item.correctAnswer));
    console.log(arrCorrectAnswer);
    allCorrectAnswers = [...arrCorrectAnswer]
  },
  (error) => {
    console.log("error");
  }
);

let indexQuestion = 0;

let arrAnswer = [];

function addAnswer(event) {
  let a = event.target.value;
  arrAnswer.push(a);
}

console.log(arrAnswer);


document.querySelector("#next").addEventListener("click", nextQuestion, false)
document.querySelector("#prev").addEventListener("click", previousQuestion, false)

function nextQuestion() {
  if (indexQuestion >= dataArr.length) {
    checkAnswer();
  }

  let elementInfo = document.getElementById("questions_box");
  while (elementInfo.firstChild) {
    elementInfo.removeChild(elementInfo.firstChild);
  }
  
  ++indexQuestion

  let spanCat = document.createElement("p");
  spanCat.innerHTML = `Your category: ${dataArr[indexQuestion].category}`;
  document.querySelector("#questions_box").appendChild(spanCat);
  let spanQuest = document.createElement("p");
  spanQuest.innerHTML = `Your question: ${dataArr[indexQuestion].question}`;
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
  
  --indexQuestion

  let spanCat = document.createElement("p");
  spanCat.innerHTML = `Your category: ${dataArr[indexQuestion].category}`;
  document.querySelector("#questions_box").appendChild(spanCat);
  let spanQuest = document.createElement("p");
  spanQuest.innerHTML = `Your question: ${dataArr[indexQuestion].question}`;
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
    label.for = `${item}id`;
    buttonsDiv.appendChild(label);
    document.querySelector("#questions_box").appendChild(buttonsDiv);
  });
}

document.querySelector("#get").addEventListener("click", checkAnswer, false)

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
