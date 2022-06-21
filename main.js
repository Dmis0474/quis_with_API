
    var allQuestions = [
        {sequence: 1, question: "0. Who is Prime Minister of the United Kingdom?", choices: ["Theresa May", "Winston Churchill", "Tony Blair"], 
        correctAnswer: ["Theresa May"], userAnswer: []},
        {sequence: 2, question: "1. Which cities are located in the Great Britain?", choices: ["Paris", "Warsaw", "London", "Liverpool", "Budapest"], 
        correctAnswer:["London", "Liverpool"], userAnswer: []},
        {sequence: 3, question: "2. What is the capital of the Russian Federation?", choices: ["Prague", "Minsk", "Washington", "Moscow"], 
        correctAnswer: ["Moscow"], userAnswer: []},
        {sequence: 4, question: "3. Who was the first man in space", choices: ["Armstrong", "Leonov", "Titov", "Gagarin", "Gorbachev"], 
        correctAnswer: ["Gagarin"], userAnswer: []},
        {sequence: 5, question: "4. Who is the President of the USA", choices: ["Putin", "Psaki", "Clinton", "Obama"], 
        correctAnswer: ["Obama"], userAnswer: []},
      ];

      let indexQuestion = 0;

      
    
      let div = document.createElement('div');
      div.className = "question";
      div.id = 'info'
      div.innerHTML = `<span>Номер вопроса${allQuestions[0].sequence}:</span> `;
      div.innerHTML = `<span>Вопрос:${allQuestions[0].question}</span> `;
      document.body.append(div);

      let questionContainer = document.createElement('div')
      document.body.append(questionContainer);
      questionContainer.id = "cont"
      questionContainer.inner = allQuestions[0].choices.map( (item, index)=>{
          let input = document.createElement('input');
          input.className = "btn"
          input.onchange = click22
          input.addEventListener("onchange", click22, false)
          input.type = "radio"
          input.id = `${item}id`
          input.value = `${item}`
          input.name = "inputOption"
          questionContainer.appendChild(input);
          let label = document.createElement('label')
          label.innerHTML =`${item}`
          label.for =`${item}id` 
          questionContainer.appendChild(label);
          

      })  
      
     



      function nextQuestion () {
        if (indexQuestion >= 4) {
            checkAnswer()
          } 

        let elementInfo = document.getElementById("info")
        while (elementInfo.firstChild) {
            elementInfo.removeChild(elementInfo.firstChild);
        }
        let elementButtons = document.getElementById("cont")
        while (elementButtons.firstChild) {
            elementButtons.removeChild(elementButtons.firstChild);
        }
        ++indexQuestion
   
        div.innerHTML = `<span>Номер вопроса${allQuestions[indexQuestion].sequence}:</span> `;
        div.innerHTML = `<span>Вопрос:${allQuestions[indexQuestion].question}</span> `;
        document.body.append(div);
    
        document.body.append(questionContainer);
        questionContainer.inner = allQuestions[indexQuestion].choices.map( item =>{
            let input = document.createElement('input');
            input.className = "btn"
            input.onchange = click22
            input.addEventListener("onchange", click22, false)
            input.type = "radio"
            input.id = `${item}id`
            input.value = `${item}`
            input.name = "inputOption"
            questionContainer.appendChild(input);
            let label = document.createElement('label')
            label.innerHTML =`${item}`
            label.for =`${item}id` 
            questionContainer.appendChild(label);
         
      })  
           
    }
    
      function previousQuestion () {
        if (indexQuestion >= 4) {
            alert('Подтвердите ответы нажав Accept')
          } 

        let elementInfo = document.getElementById("info")
        while (elementInfo.firstChild) {
            elementInfo.removeChild(elementInfo.firstChild);
        }
        let elementButtons = document.getElementById("cont")
        while (elementButtons.firstChild) {
            elementButtons.removeChild(elementButtons.firstChild);
        }
        --indexQuestion
   
        div.innerHTML = `<span>Номер вопроса${allQuestions[indexQuestion].sequence}:</span> `;
        div.innerHTML = `<span>Вопрос:${allQuestions[indexQuestion].question}</span> `;
        document.body.append(div);
    
        document.body.append(questionContainer);
        questionContainer.inner = allQuestions[indexQuestion].choices.map( item =>{
            let input = document.createElement('input');
            input.className = "btn"
            input.onchange = click22
            input.addEventListener("onchange", click22, false)
            input.type = "radio"
            input.id = `${item}id`
            input.value = `${item}`
            input.name = "inputOption"
            questionContainer.appendChild(input);
            let label = document.createElement('label')
            label.innerHTML =`${item}`
            label.for =`${item}id` 
            questionContainer.appendChild(label);
         
      })  
    }


    let arrAnswer = []
    function click22(event) {
        
        let a = event.target.value;
        arrAnswer.push(a)  
        allQuestions.map((item, i) => {
            item.userAnswer[0] =  arrAnswer[i]   
            })
        
        }


      

    function checkAnswer() {
        let counter = 0;
        allQuestions.map( item => {
          if( item.correctAnswer.indexOf(item.userAnswer[0]) >= 0) {
            counter++
          }  
        })
        let resultText = document.createElement('div');
        resultText.className = "result";
        resultText.innerHTML = `<p>Молодец! Правильных ответов: ${counter}!</p> `;
        document.body.append(resultText);  
        
    }


    
       
 
console.log(arrAnswer)
console.log(allQuestions)