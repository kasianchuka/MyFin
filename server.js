var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(express.static(__dirname));
app.use(morgan('short'));
app.post('/incomeData', function(request, response) {
	response.send({ 'data': 'q23435rfdhgf43' }).status(200);
	console.log('data posted');
});

app.listen(3000);
