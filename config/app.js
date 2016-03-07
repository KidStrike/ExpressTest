'use strict';

let express = require('express');
let path = require('path');
//let os = require('os').networkInterfaces();
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let config = require('config');
let app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// view engine setup
app.set('views', 'views');
app.set('view engine', 'jade');

//assets folders
app.use('/marketplace', express.static(path.join(__dirname,'../modules/marketplace/templates/')));

app.use(function (req, res, next) {
	//config.hostname = req.hostname;
	//console.log(config.hostname);
	next();
});

//for testing, redirect to marketplace
app.all('/', (req, res, next) => {
	//req.url = '/marketplace';
	res.redirect('/marketplace');
	next();
});

app.use('/marketplace', require('../modules/marketplace'));

// catch 404 and forward to error handler
app.use((req, res, next)=>{
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use((err, req, res, next)=>{
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next)=>{
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;