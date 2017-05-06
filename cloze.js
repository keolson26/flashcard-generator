var fs = require("fs");
var ClozeCards = require("./ClozeCards");
var inquirer = require("inquirer");
var dataArr =[];
var questionArr = [];
var answerArr = [];

//Clear File
//fs.truncate("clozecards.txt", 0, function(){console.log("Clear File");});


//Pull raw data from file

fs.readFile("clozecards.txt", "utf8", function (err, data) {
	dataArr = data.split(",");

	var questionCount = parseInt(dataArr.length/2);

	for (var i = 0; i < questionCount; i++) {
 		questionArr.push(dataArr[i]);
	}

	for(var i = questionCount; i < dataArr.length; i++) {
		answerArr.push(dataArr[i]);
	}

	console.log("Questions: "+questionArr);
	console.log("Answers: "+answerArr);

	console.log(questionArr[0]);

	inquirer.prompt ([
		{
			type: "input",
			message: "Answer: ",
			name: "answer"
		}
		]).then(function(ans) {
			if(ans.answer===answerArr[0]) {
				console.log("That's correct!");
			}
			else{
				console.log("Incorrect. The answer was "+answerArr[0]);
			}
		});
});