function ready () {
    console.log ("Page Ready");
    document.forms.fav
}
// let multipleChoice = document.getElementById('multiplechoice')
// let numberright = 0

// document.getElementById('goal creation').onclick = function()

const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const qImg = document.getElementById("qImg");

const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const progress = document.getElementById("progress");

const scoreDiv = document.getElementById("scoreContainer");

let questions = [

    {

        question : "Which part of the skeletal system is represented by N?",

        imgSrc : "https://i.pinimg.com/originals/4f/93/4e/4f934ead9d447dcdff81fe77f269b053.jpg",

        choiceA : "Femur",

        choiceB : "Ulna",

        choiceC : "Tibia",

        correct : "A"

    },{

        question : "Which part of the skeletal system is represented by H?",

        imgSrc : "https://i.pinimg.com/originals/4f/93/4e/4f934ead9d447dcdff81fe77f269b053.jpg,

        choiceA : "humerus",

        choiceB : "sternum",

        choiceC : "clavicle",

        correct : "B"

    },{

        question : "Which part of the skeletal system is represented by M?",

        imgSrc : "https://i.pinimg.com/originals/4f/93/4e/4f934ead9d447dcdff81fe77f269b053.jpg",

        choiceA : "Sacrum",

        choiceB : "Patella",

        choiceC : "Pelvis",

        correct : "C"

    },{

        question : "Which part of the skeletal system is represented by J?",

        imgSrc : "https://i.pinimg.com/originals/4f/93/4e/4f934ead9d447dcdff81fe77f269b053.jpg",

        choiceA : "Clavicle",

        choiceB : "Scapula",

        choiceC : "Ulna",

        correct : "A"
    },{

        question : "Which part of the skeletal system is represented by C?",

        imgSrc : "https://i.pinimg.com/originals/4f/93/4e/4f934ead9d447dcdff81fe77f269b053.jpg",

        choiceA : "Fibia",

        choiceB : "Mandible",

        choiceC : "Phalanges",

        correct : "B"
    }

];

const lastQuestion = questions.length - 1;

let runningQuestion = 0;

function renderQuestion(){

    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

function renderProgress(){

    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){

        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";

    }
}

start.addEventListener("click",startQuiz);