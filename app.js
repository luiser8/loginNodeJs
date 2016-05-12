var express = require('express');
var app = express();
var server;
var parser = require('body-parser');

var data = {
	login: 'user',
	pass: '123'
};

app.use(parser.urlencoded({extend: true}));

server = app.listen(8000, function(){
	console.log('Port 8000');
});

app.get('/', function(req, res){
	res.sendfile('index.html');
});

app.post('/entrar', function(req, res){
	if(req.body.login == data.login && req.body.pass == data.pass){
		res.sendfile('home.html');
	}else{
		res.redirect('/');
	}
});