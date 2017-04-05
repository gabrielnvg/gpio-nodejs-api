var exec = require('child_process').exec;
var express = require('express');
var app = express();


//Home
app.get('/', function(req, res) {
  res.type('text/plain');
  res.send(
	"To read all pins values, go to \"/readall\"."
    + "\n\n"
    + "On the URL, write a GPIO pin number (pin's name number, not physical number)."
    + "\n"
    + "Ex: \"/read/5\" = pin 5 value."
    + "\n\n"
    + "On the URL, write a GPIO pin's number (pin's name number, not physical number), its direction (1 for INPUT or 0 for OUTPUT) and its value (1 for HIGH or 0 for LOW)."
    + "\n"
    + "Ex: \"/read/5/0\" = pin number five as OUTPUT."
  );
});


//Read all pins values
app.get('/readall', function(req, res) {
  var cmd = 'gpio readall';
  
  exec(cmd, function(error, stdout, stderr) {
	res.type('text/plain');
	res.send(stdout);
    console.log('gpio readall displayed.');
    
    if (error !== null) {
        console.log('exec error: ' + error);
    }
  });
});


//Write to pin
app.get('/write/:pin/:direction/:value', function(req, res) {
  var pin = req.params.pin;
  var direction = req.params.direction;
  var value = req.params.value;
  
  if(direction == 0) {
	  direction = "out";
  }
  else if(direction == 1) {
	  direction = "in";
  }
  
  var cmd = 'gpio mode ' + pin + ' ' + direction;
  cmd += ' && gpio write ' + pin + ' ' + value;
  
  exec(cmd, function(error, stdout, stderr) {
    var msg = 'Pin ' + pin + ' wrote as ' + direction + ' with value ' + value + '.';
    res.type('text/plain');
    res.send(msg);
    console.log(msg);
    
    if (error !== null) {
        console.log('exec error: ' + error);
    }
  });
});


//Read pin value
app.get('/read/:pin', function(req, res) {
  var pin = req.params.pin;  
  
  var cmd = 'gpio read ' + pin;
  
  exec(cmd, function(error, stdout, stderr) {
    var msg = 'Pin number ' + pin + ' value is ' + value + '.';
    res.type('text/plain');
    res.send(msg);
    console.log(msg);
    
    if (error !== null) {
        console.log('exec error: ' + error);
    }
  });
});


var port = 3001;
app.listen(port);
console.log('Listening on port ' + port + '.');
