let questions = [
    {
    numb: 1,
    question: "বাংলাদেশের রাজধানী কোথায়??",
    answer: "Hyper Text Markup Language",
    options: [
      "ঢাকা",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
    {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];

//
const startBtn = document.querySelector('.startBtn button');
const infoBox = document.querySelector('.infoBox');
const continueBtn = document.querySelector('.continue');
const quizBox = document.querySelector('.quizBox');
const exitBtn = document.querySelector('.buttons .exit');
const optionList = document.querySelector('.optionList');
const insertQuesFooter = document.querySelector('.totalQue');
let score = document.querySelector('.score');

let queCount = 0;
let userScore = 0;
let quesNumber = 1;

startBtn.onclick = () =>{
    infoBox.classList.add("activeInfo")
}
continueBtn.onclick = () =>{
    infoBox.classList.remove('activeInfo');
    quizBox.classList.add('activeQuiz')
    showQuestion(0)
    queCounter(1)
    
}
exitBtn.onclick = () =>{
    window.location.reload();
    console.log('hello')
}

//show Question function start
const showQuestion = (index) =>{
    const queTxt = document.querySelector('.queText');
    let queTag = `<span> ${questions[index].numb}. ${questions[index].question} </span>`;
    let optionTag = "";
    let i = 0;
    let optionLength = questions[index].options;
    for(i; i<optionLength.length; i++){
        optionTag += `<li class="option" onclick="optionSelected(this)"><span>${questions[index].options[i]}</span></li>`
    }   
    queTxt.innerHTML = queTag;
    optionList.innerHTML = optionTag; 
}
//show question function end

//next question function start
const nextBtn = document.querySelector('footer .nextBtn');
nextBtn.onclick = () =>{
    if(queCount < questions.length - 1){
        queCount ++;
        quesNumber ++;
        showQuestion(queCount)
        nextBtn.classList.remove('show');
        queCounter(quesNumber)

    }else{
        
    }
}
//next question fucntion end

//answer the question function start
function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    const allOptions = optionList.children.length;
    if(userAns === correctAns){
        answer.classList.add('correct');
        userScore += 1;
        score.innerHTML = userScore

    }else{
        answer.classList.add('incorrect');
        for(let i = 0; i < allOptions; i++){
            if(optionList.children[i].textContent == correctAns){
                optionList.children[i].setAttribute("class", "option correct");
                //auto selected correct answer;
            }
        }
       
    }
    //once user select an option then disabled all options
    for(let i = 0; i < allOptions; i++){
        optionList.children[i].classList.add('disabled');
    }
    nextBtn.classList.add('show');
}
//answer the question function end

const queCounter = (index) =>{
    let totalQueCounTag =`<span><p>${index}</p> of <p>${questions.length}</p> Questions</span>`;
    insertQuesFooter.innerHTML = totalQueCounTag;
}