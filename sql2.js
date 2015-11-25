var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', 3000);


var mysql = require('mysql');
var pool = mysql.createPool({
  host  : 'localhost',
  user  : 'student',
  password: 'default',
  database: 'student'
});


app.get('/reset-table',function(req,res,next){
  var context = {};
  pool.query("DROP TABLE IF EXISTS todo", function(err){
    var createString = "CREATE TABLE todo(" +
    "id INT PRIMARY KEY AUTO_INCREMENT," +
    "name VARCHAR(255) NOT NULL," +
    "done BOOLEAN," +
    "due DATE)";
    pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('home',context);
    });
  });
});


app.get('/', function(req, res, next) {
	  var context = {};
	  pool.query('SELECT * FROM todo', function (err, rows, fields) {
		  if(err) {
			  next(err);
			  return;
		  }
		  context.results = JSON.stringify(rows);
		  res.render('home', context);
	  });
  });
  
  
  
app.use(function(req, res) {
	
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http:localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});