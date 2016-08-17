var app = require('express');
var server = new app();

server.use(app.static('./'));

server.listen(3000, function(err) {
	if(err) {
		console.error('Error occurred');
	}
	console.log('Server is running at http://localhost:3000');
});
