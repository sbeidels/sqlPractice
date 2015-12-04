var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
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


app.get('/', function(req, res, next) {
		console.log("in app get");
	  var context = {};
	  pool.query('SELECT * FROM workouts', function (err, rows, fields) {
		  if(err) {
			  next(err);
			  return;
		  }
		  context.results = JSON.stringify(rows);
		  
		  console.log(context.results);
		  console.log("about to send");
		  //res.type('json');
		  //res.send(context);
		  res.render('home', context);
	  });
  });




app.get('/reset-table',function(req,res,next){
  var context = {};
  pool.query("DROP TABLE IF EXISTS workouts", function(err){ //replace your connection pool with the your variable containing the connection pool
    var createString = "CREATE TABLE workouts("+
    "id INT PRIMARY KEY AUTO_INCREMENT,"+
    "name VARCHAR(255) NOT NULL,"+
    "reps INT,"+
    "weight INT,"+
    "date DATE,"+
    "lbs BOOLEAN)";
    pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('home',context);
    })
  });
});

app.get('/table', function(req, res, next) {
		console.log("in table get");
		
	  var context = {};
	  pool.query('SELECT * FROM workouts', function (err, rows, fields) {
		  if(err) {
			  next(err);
			  return;
		  }
		  context.results = JSON.stringify(rows);
		  
		 // console.log(context.results);
		 // console.log("about to send");
		  res.type('json');
		  res.send(context);
		  //res.render('home', context);
	  });
  }); 

app.post('/insert',function(req,res,next){
  var context = {};
  console.log("in insert");
  console.log(req.body);
  console.log("print name");
  console.log(req.body.name);
  
  
 
  pool.query("INSERT INTO workouts (`name`, `reps`, `weight`, `date`, `lbs`) VALUES (?,?,?,?,?)", [req.body.name, req.body.reps, req.body.weight, req.body.date, req.body.units], function(err, result){  //note the back tick `
    if(err){
      next(err);
      return;
    }
	pool.query('SELECT * FROM workouts', function (err, rows, fields) {
		  if(err) {
			  next(err);
			  return;
		  }
		  context.results = JSON.stringify(rows);
		  console.log(context.results);
          res.type('json');
		  res.send(context);
  });
});  

});

app.post('/delete',function(req,res,next){
  var context = {};
  console.log("in delete");
  console.log(req.body);
 
  
 
  pool.query("DELETE from workouts WHERE id = ?", [req.body.id], function(err, result){  //note the back tick `
    if(err){
      next(err);
      return;
    }
	pool.query('SELECT * FROM workouts', function (err, rows, fields) {
		  if(err) {
			  next(err);
			  return;
		  }
		  context.results = JSON.stringify(rows);
          res.type('json');
		  res.send(context);
  });
});  

});

app.get('/logID', function(req,res,next) {
	var context = {};
	console.log("in log ID");
	console.log(req.query.id);
	context.id = req.query.id;
	res.render('update', context);
})


app.get('/getRow',function(req,res,next){
  var context = {};
  console.log("in get row");
    
  
 
    
	pool.query('SELECT * FROM workouts WHERE id = ?', [req.query.id], function (err, result) {
		  if(err) {
			  next(err);
			  return;
		  }
		  else {
			  console.log(result);
			  context.results = JSON.stringify(result);
			  console.log(context.results);
			//res.type('json');
			//res.send(context);
			 res.render('update', context);
		  }
		  /*context.results = JSON.stringify(rows);
		  context.data = JSON.stringify(context.results);
		  console.log(context.results);
		  console.log(context.data);
         // res.type('json');
		  //res.send(context);
		  res.render("update", context);*/
  });
});  


app.use(function(req, res) {
	
  res.status(404);
  //res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
 // res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http:localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});