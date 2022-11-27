const quiz = [
  {
    question: "４＋４は？",
    answers: [  
      "8",
      "7",
      "6",
      "5"  
    ],
  correct: "8"
  },{
  
    question: "Javaで文字列を定義する場合は？",
    answers: [  
      "int",
      "boolean",
      "sirial",
      "String"  
    ],
  correct: "String" 
  },{
  
    question: "継承（extends）を使うときはどのような場合？",
    answers: [  
      "APIを使用する場合",
      "既存のクラスに基づいて新たなクラスを定義する場合",
      "別クラスのメソッドの変数を使用する場合",
      "newされた直後に自動的に実行される。値をあらかじめセットしておく場合"  ｆ
    ],
  correct: "既存のクラスに基づいて新たなクラスを定義する場合"
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
  
  
  
  
  
  
  