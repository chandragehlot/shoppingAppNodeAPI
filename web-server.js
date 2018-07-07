var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
/*var session = require('express-session');*/

var routehandle = require('./routes/index');
var userroutehandle = require('./routes/userValidation');

var app = express();

mongoose.connect('mongodb://localhost/shoppingServices',function(){
	console.log("mongo db connected");
});

/*app.use(session({
	secret: 'this is a secret',
	name:"loginsessionid",
	domain:'.myshopping.app.test',
	resave: true,
  	saveUninitialized: true,	
	cookie: {
		path:'/',
		domain:'.myshopping.app.test',
		maxAge:1000*2
	}
}));*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,authorization,Origin');
  next();
});

app.use('/shoppingservice', routehandle);
app.use('/uservalidation',userroutehandle);

app.use('/', express.static(path.join(__dirname, '/')));

module.exports = app;
