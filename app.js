const quiz = [
{
  question: "リュウマの苗字は？",
  answers: [  
    "田中",
    "加端",
    "佐藤",
    "岸本"  
  ],
correct: "加端"
},{

  question: "あなたの苗字は？",
  answers: [  
    "田中",
    "加端",
    "佐藤",
    "岸本"  
  ],
correct: "佐藤"
},{

  question: "親友の苗字は？",
  answers: [  
    "田中",
    "加端",
    "佐藤",
    "岸本"  
  ],
correct: "岸本"
}
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;



const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();


const clickHandler = (e) => {
  if(quiz[quizIndex].correct ===  e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }
  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert('終了! あなたの正解数は' + score + '/' + quizLength + 'です');
  }
};

for(let handlerIndex = 0;handlerIndex < buttonLength; handlerIndex++){
  $button[handlerIndex].addEventListener('click', (e)=>{
    clickHandler(e);
  });
}






