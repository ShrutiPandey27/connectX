const quizDB = [
    {
        question: "Q1: Operating systems:",
        a: "enables the programmer to draw a flow chart",
        b: "provides a layer, user friendly interface",
        c: "links a program with subroutine it references",
        d: "all of these",
        ans : "ans2"
    },

    {
        question: "Q2: FIFO scheduling is:",
        a: "Fair-share scheduling",
        b: "Deadline scheduling",
        c: "Non-preemptive scheduling",
        d: "Preemptive scheduling",
        ans : "ans3"
    },

    {
        question: "Q3: What is the name of the operating system that reads and reacts in terms of actual time?",
        a: "Real time system",
        b: "Time sharing system",
        c: "Quick response system",
        d: "Batch system",
        ans : "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');


let score = 0;
let questionCount = 0;
const loadQuestion = () => {
   const questionList = quizDB[questionCount];
   question.innerText = questionList.question;
   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
     if(curAnsElem.checked){
         answer = curAnsElem.id;
     }

     
    });
    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
    score++;
    
    };

    questionCount++;

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h1> Your score is : ${score}/${quizDB.length} </h1>
        <button class="btn" onclick="location.reload()">Attempt the quiz again</botton>
        `;
        showScore.classList.remove('scoreArea');
    }

});

