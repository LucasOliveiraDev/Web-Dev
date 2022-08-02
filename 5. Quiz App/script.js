const quizData = [
    {
        question: "What is the most important time?",
        a: 'Past',
        b: 'Future',
        c: 'Present',
        d: '23:47',
        correct: 'c'
    }, 
    {
        question: "What should I do today?",
        a: 'Study',
        b: 'Program',
        c: 'Be present',
        d: 'All of them',
        correct: 'd'
    }, 
    {
        question: "What is blocking me from doing what I should do?",
        a: 'Life',
        b: 'Myself',
        c: 'They',
        d: 'Society',
        correct: 'b'
    },
    {
        question: "Why bother?",
        a: 'Why wouldnt I?',
        b: 'IDK',
        c: 'FFS',
        d: 'IGKMS',
        correct: 'a'
    }
];

const quiz = document.getElementById("quizStuff");
const answerEls= document.querySelectorAll('.answer');
const questionEl = document.getElementById('questionText');
const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deSelectAns()
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;

    //console.log(currentQuiz+" "+quizData.length);
}

function getSelected() {

    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;

}

function deSelectAns(){

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answerEl.checked = false;
        }
    });

}

submitBtn.addEventListener('click', ()=>{
    
    const answer = getSelected();

    console.log(answer);

    if (answer){

        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `
            <h2>You answered correctly:<br>${score}/${quizData.length} questions.</h2>
            
            <button onclick ="location.reload()">Reload</button>`;
        }
    }
});