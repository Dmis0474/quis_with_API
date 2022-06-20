
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

      

      allQuestions.map( item => {
        let div = document.createElement('div');
        div.className = "question";
        div.innerHTML = `<span>Номер вопроса${item.sequence}:</span> `;
        div.innerHTML = `<span>Вопрос:${item.question}</span> `;
        document.body.append(div);
        item.choices.map( item =>{
            let button = document.createElement('button');
            button.className = "btn"
            button.onclick = "click22(this)"
            
            button.innerHTML = `${item}`
            document.body.append(button);
        })
    })  

    function click22(event) {
        var a = event.target;
        alert(a)
       }
 
    let eventBtn = document.getElementsByClassName("btn")
    console.log(eventBtn)
    eventBtn.addEventListener("click", click22, false);