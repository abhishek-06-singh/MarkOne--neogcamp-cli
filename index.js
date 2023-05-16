// Import the readline-sync module
var readLineSync = require("readline-sync");

// Prompt the user for their name
var userName = readLineSync.question("What is your Name? ");

console.log("Hello " + userName + "! Do you know Abhishek? ");

var points = 0;

// Define an array of questions and answers
var questions = [
  {
    question: "Where did Abhishek live? ",
    answer: "Maihar",
  },
  {
    question: "Who is Preetike? ",
    answer: "Sister of Abhishek",
  },
  {
    question: "Which is my favorite superhero? ",
    answer: "Batman",
  },
  {
    question: "Which is my favorite cartoon character? ",
    answer: "Oggy",
  },
  {
    question: "What is my favorite season? ",
    answer: "Winter",
  },
  {
    question: "What is my favorite drink? ",
    answer: "Tea",
  },
];

// Define an array of high scores
var highScores = [
  {
    name: "Abhishek's Mom",
    score: 6,
  },
  {
    name: "Preetika",
    score: 6,
  },
  {
    name: "Myself",
    score: 6,
  },
];

// Define the play function that takes a question and answer as input
function play(question, answer) {
  // Prompt the user for an answer
  var userAnswer = readLineSync.question(question);

  // Check if the user's answer is correct
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Good! This is the right answer. 😊");
    points++;
  } else {
    console.log("Bruh... Your answer is wrong. 😡");
    points--;
  }

  console.log("Your current points are " + points);
  console.log("-------------");
}

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

// Check the player's score and display a message
if (points < 3) {
  console.log(points + " is a bad score. You don't know me. ");
} else {
  console.log(points + " points. Thank God you know me! ");
}

// Display the high scores
console.log("Check out the high scores:");
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + " " + highScores[i].score);
}
