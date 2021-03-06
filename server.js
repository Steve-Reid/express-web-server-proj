var express = require('express'),
	app = express(),
	middleware = require('./middleware.js'),
	port = process.env.PORT || 3000;



// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
	console.log('Express Server Started on port ' + port);
});