
let d
const xhr = new XMLHttpRequest();
const requestURL = `https://the-trivia-api.com/api/questions`;
xhr.open("GET", requestURL);
xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4 || xhr.status !== 200) {
    return;
  } else {
  const response = JSON.parse(xhr.response);
  var dataArr = response
  }
  document.querySelector('#catQuest').innerHTML = `Ваша категория: ${dataArr[0].category}`;
  document.querySelector('#Question').innerHTML = `Ваш вопрос: ${dataArr[0].question}`;
  console.log(dataArr)
  
};
xhr.send();


let indexQuestion = 0;



// let questionContainer = document.createElement("div");
// document.body.append(questionContainer);
// questionContainer.id = "cont";
// questionContainer.inner = allQuestions[0].choices.map((item, index) => {
//   let input = document.createElement("input");
//   input.className = "btn";
//   input.onchange = addAnswer;
//   input.addEventListener("onchange", addAnswer, false);
//   input.type = "radio";
//   input.id = `${item}id`;
//   input.value = `${item}`;
//   input.name = "inputOption";
//   questionContainer.appendChild(input);
//   let label = document.createElement("label");
//   label.innerHTML = `${item}`;
//   label.for = `${item}id`;
//   questionContainer.appendChild(label);
// });

// function nextQuestion() {
//   if (indexQuestion >= 4) {
//     checkAnswer();
//   }

//   let elementInfo = document.getElementById("info");
//   while (elementInfo.firstChild) {
//     elementInfo.removeChild(elementInfo.firstChild);
//   }
//   let elementButtons = document.getElementById("cont");
//   while (elementButtons.firstChild) {
//     elementButtons.removeChild(elementButtons.firstChild);
//   }
//   ++indexQuestion;

//   div.innerHTML = `<span>Номер вопроса${allQuestions[indexQuestion].sequence}:</span> `;
//   div.innerHTML = `<span>Вопрос:${allQuestions[indexQuestion].question}</span> `;
//   document.body.append(div);

//   document.body.append(questionContainer);
//   questionContainer.inner = allQuestions[indexQuestion].choices.map((item) => {
//     let input = document.createElement("input");
//     input.className = "btn";
//     input.onchange = addAnswer;
//     input.addEventListener("onchange", addAnswer, false);
//     input.type = "radio";
//     input.id = `${item}id`;
//     input.value = `${item}`;
//     input.name = "inputOption";
//     questionContainer.appendChild(input);
//     let label = document.createElement("label");
//     label.innerHTML = `${item}`;
//     label.for = `${item}id`;
//     questionContainer.appendChild(label);
//   });
// }

// function previousQuestion() {
//   if (indexQuestion >= 4) {
//     alert("Подтвердите ответы нажав Accept");
//   }

//   let elementInfo = document.getElementById("info");
//   while (elementInfo.firstChild) {
//     elementInfo.removeChild(elementInfo.firstChild);
//   }
//   let elementButtons = document.getElementById("cont");
//   while (elementButtons.firstChild) {
//     elementButtons.removeChild(elementButtons.firstChild);
//   }
//   --indexQuestion;

//   div.innerHTML = `<span>Номер вопроса${allQuestions[indexQuestion].sequence}:</span> `;
//   div.innerHTML = `<span>Вопрос:${allQuestions[indexQuestion].question}</span> `;
//   document.body.append(div);

//   document.body.append(questionContainer);
//   questionContainer.inner = allQuestions[indexQuestion].choices.map((item) => {
//     let input = document.createElement("input");
//     input.className = "btn";
//     input.onchange = addAnswer;
//     input.addEventListener("onchange", addAnswer, false);
//     input.type = "radio";
//     input.id = `${item}id`;
//     input.value = `${item}`;
//     input.name = "inputOption";
//     questionContainer.appendChild(input);
//     let label = document.createElement("label");
//     label.innerHTML = `${item}`;
//     label.for = `${item}id`;
//     questionContainer.appendChild(label);
//   });
// }

// let arrCorrectAnswer = [];
// allQuestions.map((item) => arrCorrectAnswer.push(...item.correctAnswer));
// console.log(arrCorrectAnswer);

// let arrAnswer = [];

// function addAnswer(event) {
//   let a = event.target.value;
//   arrAnswer.push(a);
//   allQuestions.map((item, i) => {
//     item.userAnswer[0] = arrAnswer[i];
//   });
// }

// function checkAnswer() {
//   let counter = 0;
//   allQuestions.map((item) => {
//     if (arrCorrectAnswer.indexOf(item.userAnswer[0]) >= 0) {
//       counter++;
//     }
//   });
//   let resultText = document.createElement("div");
//   resultText.className = "result";
//   resultText.innerHTML = `<p>Молодец! Правильных ответов: ${counter}!</p> `;
//   document.body.append(resultText);
// }

// console.log(arrAnswer);
// console.log(allQuestions);
