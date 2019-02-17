var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
//var UserRoute = require('./index');


var db = require('./config/db');

var port = process.env.PORT || 8080; 

app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

console.log(db.url);
//mongoose.connect(db.url, { useNewUrlParser: true }).then(
   //  () => {console.log('Database is connected') },

    //err => { console.log('Cannot connect to the database'+ err)}
  //);



// routes ==================================================

require('./app/routes')(app); // pass our application into our routes
//app.use('/user', UserRoute);

app.listen(port);	
console.log('port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app