const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
//we will add text to the it since we have qC and score 
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion={};
let acceptingAnswers=false;
let score=0;
let questionCounter= 0;
let avaiableQuestions = [];

let questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choice1: "1.strings",
      choice2: "2. booleans", 
      choice3:"3. alerts", 
      choice4:"4. numbers",
      answer: 3
    },
    {
      question: "Arrays in JavaScript can be used to store ______.",
       choice1:  "1. numbers and strings",
       choice2:  "2. other arrays",
       choice3:"3. booleans",
       choice4: "4.  all of the above",
       answer: 4
    },
    {
      question:
        "String values must be enclosed within _____ when being assigned to variables.",
       choice1:"1. commas", 
       choice2:"2.  curly brackets", 
       choice3:"3. quotes", 
       choice4:"4. parentheses",
       answer: 3
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
         choice1:"1.   JavaScript",
         choice2:"2.   terminal/bash",
         choice3:"3.     for loops",
         choice4:"4.   console.log",    
         answer: 4
    },
    {
      question:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        choice1:"1. break", 
        choice2:"2. stop",
        choice3:"3. halt", 
        choice4:"4.  exit",
        answer:  1
    }
  ];

  //constants
  const CORRECT_BONUS = 10;
  const MAX_QUESTIONS = 5;

  startGame = () => {
    questionCounter=0;
    score=0;
    avaiableQuestions =[ ...questions];
    
    //remove this when you get to work at the end of the page console.log(avaiableQuestions);
    getNewQuestion();
    };

    //this is used to call the questions from the array 
    getNewQuestion = () => {
        //this is where the games ends 
        if(avaiableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
          //12 end page when we end the game we want to save the players score in a local store
          localStorage.setItem("mostRecentScore",score); 
            // this is when you get to the end of the question,it takes you to the end of the page
            return window.location.assign("end.html");
            }
        questionCounter++;
        //9 we will add the question counter and score belowthis is the first method
        //questionCounterText.innerText=questionCounter + "/" + MAX_QUESTIONS;
        questionCounterText.innerText=`${questionCounter}/${MAX_QUESTIONS}`;
       const questionIndex= Math.floor(Math.random() * avaiableQuestions.length);
       currentQuestion= avaiableQuestions[questionIndex];
       question.innerText = currentQuestion.question;

 //dataset is where you add properties in 
      //this is to pull the choices from the array 
choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
});

    avaiableQuestions.splice(questionIndex, 1);

    acceptingAnswers=true;
    };

   
choices.forEach(choice => {
   choice.addEventListener("click", e => {
   // console.log(e.target);if you want to make each anser get displayed on the console
   if(!acceptingAnswers)return;
 //this will make the user select an answer and it moves to the next question
   acceptingAnswers= false;
   const selectedChoice = e.target;
   const selectedAnswer= selectedChoice.dataset["number"];

   //5 this is method to add the correct and the incorrect class that will displayed on the answer
   // always set the default to incorrect so when you click on the right answer,it will be correct
   // const classToApply='incorrect';if(selectedAnswer == currentQuestion.answer){  classToApply ='correct'; }


//7 another methosd to add correct and incorrect answer is by using the terminary operator which is in one and easier
//if this condition asssign the condition with ? ,if it's not then use : to assign the next condition 
const classToApply =
 selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
 // 11 add the score to the scoreboard and increment the score
 if (classToApply === 'correct'){
  incrementScore(CORRECT_BONUS);
  }

 //the selectedChoice is the text but to capture the whole element we use parentE n classlist to capture the whole block whic is classToApply
selectedChoice.parentElement.classList.add(classToApply);

// setTimeOut takes a callback function to what you want to do and this set the time once you choose the correct or incorrect answer and it moves away slowly to the next question.
setTimeout(() =>{
  selectedChoice.parentElement.classList.remove(classToApply);
  getNewQuestion();
}, 1000);

//8 this removes the correct and incorrect class in the console


   //4 this is where the answer the user put is displayed true or false by using ==
   //6remove this when you set number console.log(selectedAnswer ==currentQuestion.answer);
 


     });
});
//10 chech if the user got the answers right and add it to the score
incrementScore = num =>{
  score += num;
  scoreText.innerText=score;
  };
       //used to call the function name//
    startGame();