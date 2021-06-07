const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName= "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question= "1) Who was the first American woman in space? ";
let correctAnswer  = "Sally Ride";
let candidateAnswer = "";
let questions = ['1)Who was the first American woman in space? ','2)True or false: 5 kilometer == 5000 meters? ','3)(5 + 3)/2 * 10 = ? ',"4)Given the array [8,'Orbit', 'Trajectory', 45], what entry is at index 2? ","5)What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers =[];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
//const input = require('readline-sync');
candidateName = input.question("Candidate Name : ");
}
 
function askQuestion() {
  
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//const input = require('readline-sync');
//console.log(question);
//candidateAnswer = input.question("Your Answer: ");
//console.log("Correct Answer: " + correctAnswer);
for (let i = 0; i < questions.length; i++) {
  candidateAnswers[i] = input.question(questions[i]);
  if (candidateAnswers[i] === correctAnswers[i]) {
    console.log ("Your answer : ", candidateAnswers[i]);
    console.log ("Correct answer : ", correctAnswers[i]);
  }
}
}
// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*if (candidateAnswer == correctAnswer) {
  console.log("Your answer is right!!");
}
else { console.log("Your answer is incorrect!!");
}*/

function gradeQuiz(candidateAnswers) {
  let numOfCorrectAnswers = 0;
  let numOfQuizQuestions = candidateAnswers.length;
for(let i=0;i < numOfQuizQuestions;i++){
  if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    	numOfCorrectAnswers += 1;
  }
  } 
   let grade = numOfCorrectAnswers/numOfQuizQuestions * 100;
   let status = "PASSED";
   if (grade < 80){
     status = "FAILED";
   }
  console.log(`>>> Overall Grade: ${grade} % (${numOfCorrectAnswers} of ${numOfQuizQuestions} responses correct) <<<`);
  console.log(`>>> Status: ${status} <<<`);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello, " + candidateName +" !");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};