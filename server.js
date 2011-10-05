var http = require("http");
var url = require("url");

console.log("Attempting to start server at http://127.0.0.1:8000/");

function start(route, handle) {
	function onRequest (request, response) {
		var pathname = url.parse(request.url).pathname; 
		console.log("Request for " + pathname + " received");
		route(handle, pathname, response);
	}
	var server = http.createServer(onRequest);
	server.listen(8888, function() {
		console.log("Server running at http://127.0.0.1:8888/");
	});
	
	// Now JS
	try {
		var everyone = require("now").initialize(server);
	
		everyone.now.distribute = function(message){
  			// this.now exposes caller's scope
 		 	everyone.now.receive(this.now.name, message);
 		}
 	}
 	catch {
 		console.log("NowJS failed to load");
 	}
}

exports.start = start;