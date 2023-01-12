const quizData = [
    {
      question: "Q1 : Who will host the FIFA World Cup 2026 ?",
      a: " Australia & New Zealand",
      b: "Brazil & Argentina",
      c: " Germany & Poland",
      d: "US, Canada & Mexico",
      correct: "d",
    },
    {
      question: "Q2 : What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "Q3 : What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
    },
    {
      question: "Q4 : What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
    },
    {
      question: "Q5 : Who is the current Prime Minister of Israel?",
  
      a: "Benjamin netanyaho",
      b: "Naftali bennet",
      c: " Yair Lapid",
      d: " None of these",
      correct: "a",
    },
    {
      question: "Q6 : Who is the Current IG of Punjab Police?",
      a: "Inam Ghani",
      b: "Faisal Shahkar",
      c: "Mohammad Aamir Zulfiqar",
      d: "Rao Sardar Ali Khan",
      correct: "c"
    }
  ];
  const quiz = document.getElementById('quiz');
  const answers = document.querySelectorAll('.answer');
  const questions = document.getElementById('question');
  const a = document.getElementById('a_text');
  const b = document.getElementById('b_text');
  const c = document.getElementById('c_text');
  const d = document.getElementById('d_text');
  const next = document.getElementById('submit');
  let result = document.querySelector(".result");
  let progress = document.querySelector(".progress");
  var valueContainer = document.querySelector(".value-container");
  var message = document.querySelector(".message");
  
  let currentQuiz = 0;
  let score = 0;
  loadQuiz()
  function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];
    questions.innerText = currentQuizData.question;
    a.innerText = currentQuizData.a;
    b.innerText = currentQuizData.b;
    c.innerText = currentQuizData.c;
    d.innerText = currentQuizData.d;
  }
  function deselectAnswers() {
    answers.forEach(answerEl => answerEl.checked = false)
  };
  function selected() {
    let answer
    answers.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id
        ansData = answerEl.innerHTML;
      }
    })
    return answer
  };
  
  // progress circular // let
  let progressValue = 0;
  let progressFail = 40;
  let progressPass = 70;
  let progressAve = 71;
  let progressEndValue = ((quizData.length * 100) / quizData.length);
  progressCircle = () => {
  
    progressValue = ((score * 100) / quizData.length).toFixed(0);
    valueContainer.textContent = `${progressValue}%`;
  
    if (progressValue <= progressFail) {
      progress.style.background = `conic-gradient( #FF0000 ${progressValue * 3.6}deg,
          #cadcff ${progressValue * 3.6}deg )`
      stat = "Fail"
    } else if ((progressValue < progressPass || progressValue > progressFail) &&
      progressValue < progressAve) {
      progress.style.background = `conic-gradient( #FFA500 ${progressValue * 3.6}deg,
              #cadcff ${progressValue * 3.6}deg )`;
      stat = "Pass"
    } else if (progressValue <= progressEndValue) {
      progress.style.background = `conic-gradient( #00FF00 ${progressValue * 3.6}deg, #cadcff ${progressValue *
        3.6}deg )`;
      stat = "Great"
    }
  };
  
  // Next 
  next.addEventListener('click', () => {
    const answer = selected()
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }
      currentQuiz++
      if (currentQuiz < quizData.length) { loadQuiz() }
      else {
        quiz.style.display = "none"; result.classList.remove("d-none")
        progressCircle()
        valueContainer.textContent = `${progressValue}%`;
        message.textContent = `${stat}`;
  
      }
    }
  });