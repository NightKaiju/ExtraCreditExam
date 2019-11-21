var question1 = {prompt: "How many?", answer: "", answers: ["1", "2", "5", "7"]};
var question2 = {prompt: "Why?", answer: "", answers: ["bc", "No Reason", "idk", "lol"]};
var question3 = {prompt: "Can I have it?", answer: "", answers: ["No", "Get Your Own", "Give me yours", "Stop"]};
var question4 = {prompt: "What is a fish", answer: "", answers: ["birb", "brib", "bob", "naw"]};
var question5 = {prompt: "Salut?", answer: "", answers: ["Quoi?", "Un", "Je Ne Se Quoi", "Oui, mon cher!"]};
var question6 = {prompt: "", answer: false};
var question7 = {prompt: "", answer: false};
var question8 = {prompt: "", answer: false};
var question9 = {prompt: "", answer: false};
var question10 = {prompt: "", answer: false};

var mcQuestions = [question1, question2, question3, question4, question5];
var tfQuestions = [question6, question7, question8, question9, question10];
for (var i = 0; i < mcQuestions.length; i++) {
    document.write(mcQuestions[i].prompt);
    document.write("<br>");
    for (var i = 0; i < mcQuestions[i].answers.length; i++) {
        document.write(mcQuestions[i].answers[i]);
        document.write("<br>");
    }
}
