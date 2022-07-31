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

const questionEl = document.getElementById('questionText');
const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;

    console.log(currentQuiz+" "+quizData.length);
}

submitBtn.addEventListener('click', ()=>{
    currentQuiz++;

    if(currentQuiz < quizData.length){
        loadQuiz();
    }
    else{
        alert("You finished! Get yourself in the present!");
    }
    
});