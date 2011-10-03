function route(handle, pathname, response) {
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response);
	}
	else {
		console.log("Unable to route request for " + pathname + " -- no request handler found");
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;