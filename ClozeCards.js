var fs = require("fs");
var partialArr1 =[];
var partialArr2 = [];
var cloze1Final;
var close2Final;

function ClozeCard (full, removed) {
	this.full = full,
	this.removed = removed
};

var cloze1 = new ClozeCard("Raleigh is the capital of North Carolina", "Raleigh");
var cloze2 = new ClozeCard("Harrisburg is the capital of Pennsylvania", "Pennsylvania");
var clozeArr = [cloze1, cloze2];

for (var i = 0; i < clozeArr.length; i++) {
	partialArr1 = cloze1.full.split(" ");
	partialArr2 = cloze2.full.split(" ");
}

for (var i = 0; i < partialArr1.length; i++) {
	if(partialArr1[i] === cloze1.removed) {
		partialArr1[i] = ("...");
	}
}

for (var i = 0; i < partialArr2.length; i++) {
	if(partialArr2[i] === cloze2.removed) {
		partialArr2[i] = ("...");
	}
}

for (var i = 0; i < partialArr1.length; i++) {
	if(i = 0) {
		cloze1Final = partialArr1[0];
	} 
	else{
		cloze1Final += partialArr1[i]+" ";
	}
}

for (var i = 0; i < partialArr2.length; i++) {
	if(i = 0) {
		cloze2Final = partialArr2[0];
	} 
	else{
		cloze2Final += partialArr2[i]+" ";
	}
}
var cloze1Exp = new ClozeCard(cloze1Final, cloze1.removed);
var cloze2Exp = new ClozeCard(cloze2Final, cloze2.removed);

fs.appendFile("clozecards.txt", cloze1Exp.full +",", function(err) {
			if (err) {
				console.log(err);
				  	}
		});
	}

fs.appendFile("clozecards.txt", cloze2Exp.full +",", function(err) {
			if (err) {
				console.log(err);
				  	}
		});
	}

fs.appendFile("clozecards.txt", cloze1Exp.removed +",", function(err) {
			if (err) {
				console.log(err);
				  	}
		});
	}

fs.appendFile("clozecards.txt", cloze2Exp.removed +",", function(err) {
			if (err) {
				console.log(err);
				  	}
		});
	}

module.exports = cloze1Exp;
module.exports = cloze2Exp;
module.exports = cloze1;
module.exports = cloze2;