var fs = require("fs");

function BasicCard (front, back) {
	this.front = front,
	this.back = back
};

var basic1 = new BasicCard("What currency is used in Japan?", "Yen");
var basic2 = new BasicCard("What is Japan's capital?", "Tokyo");
var basicArr = [basic1, basic2];

for(var i = 0; i < basicArr.length; i++) {
	fs.appendFile("cards.txt", basicArr[i].front+",", function(err) {
			if (err) {
				console.log(err);
				  	}
		});
	}

for(var i = 0; i < basicArr.length; i++) {
	fs.appendFile("cards.txt", basicArr[i].back+",", function(err) {
			if (err) {
				console.log(err);
				  	}
		});
	}


module.exports = basicArr;