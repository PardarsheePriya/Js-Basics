const questions = [
  {
    question:
      'The relation between Car and Owner or BankAccount and Customer is example for ',
    answers: [
      {text: 'Aggregation', correct: false},
      {text: 'Composition', correct: false},
      {text: 'Association', correct: true},
      {text: 'None', correct: false},
    ],
  },
  {
    question: 'Method overloading is done during',
    answers: [
      {text: 'Runtime', correct: false},
      {text: 'Dynamic Binding', correct: false},
      {text: 'Program Compilation', correct: true},
      {text: 'Late Binding', correct: false},
    ],
  },
  {
    question: 'Ad hoc polymorphism is',
    answers: [
      {text: 'Method Overloading', correct: true},
      {text: 'Method Overriding', correct: false},
      {text: 'Subclassing Polymorphis', correct: false},
      {text: 'Dynamic Binding', correct: false},
    ],
  },
  {
    question: 'In OO, the concept of IS-A is based on',
    answers: [
      {text: 'Class Inheritance', correct: false},
      {text: 'Interface Implementation', correct: false},
      {text: 'Both', correct: true},
      {text: 'None', correct: false},
    ],
  },
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer); // Add the event listener here
  });
}

function resetState() {
  nextButton.style.display = 'none';
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === 'true';

  if (correct) {
    selectedButton.classList.add('correct');
    score++;
  } else {
    selectedButton.classList.add('incorrect');
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'block';

  // Disable all answer buttons to prevent multiple selections
  const answerButtons = answerButton.querySelectorAll('button');
  answerButtons.forEach((button) => {
    button.disabled = true;
    if (button.dataset.correct) {
      button.classList.add('correct');
    }
  });
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
  nextButton.innerHTML = 'Play Again';
  nextButton.style.display = 'block';
}
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    // Quiz is completed; you can add completion logic here
    questionElement.innerHTML = 'Quiz completed!';
    showScore();
  }
});

startQuiz();
