var fs = require("fs");

function start(response) {
	console.log("Request handler 'start' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("This is my first nodeJS server");
	response.end();
}

function login(response) {
	console.log("Request handler 'login' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("This is the login page");
	response.end();
}

function chat(response) {
	console.log("Request handler 'chat' was called.");
	fs.readFile("chat.html", function(err, data) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(data);
		response.end();
	});
}

exports.start = start;
exports.login = login;
exports.chat = chat;