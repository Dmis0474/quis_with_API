
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
      questionContainer.inner = allQuestions[0].choices.map( item =>{
          let button = document.createElement('button');
          button.className = "btn"
          button.onclick = "click22(this)"
          button.addEventListener("click", click22, false)
          button.innerHTML = `${item}`
          questionContainer.appendChild(button);
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
          let button = document.createElement('button');
          button.className = "btn"
          button.onclick = "click22(this)"
          button.id = "demo"
          button.addEventListener("click", click22, false)
          button.innerHTML = `${item}`
          questionContainer.appendChild(button);
         
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
          let button = document.createElement('button');
          button.className = "btn"
          button.onclick = "click22(this)"
          button.id = "demo"
          button.addEventListener("click", click22, false)
          button.innerHTML = `${item}`
          questionContainer.appendChild(button);
         
      })  
    }

   
      

    

     
       
    

    let arrAnswer = []
    function click22(event) {
        let a = event.target.innerHTML;
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
        switch(counter) {
            case 0:
            alert (`Ты дал ${counter} правильных ответов!`)
            break;
            case 1:
            alert (`Молодец, ты дал ${counter} правильный ответ!`)
            break;
            case 2, 3, 4:
            alert(`Молодец, ты дал ${counter} правильных ответа!`) 
            break;
            case 5:
            alert(`Молодец, ты дал ${counter} правильных ответов!`)    
            break; 
        }
        
    }


    
       
 
console.log(arrAnswer)
console.log(allQuestions)