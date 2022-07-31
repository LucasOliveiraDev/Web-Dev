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

const aText = document.getElementById('aText');
const bText = document.getElementById('bText');
const cText = document.getElementById('cText');
const dText = document.getElementById('dText');

let currentQuestion = 0;

loadQuiz();

function loadQuiz() {

    currentQuestion++;

}