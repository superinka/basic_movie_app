var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
var path = require('path');
var handlebarsHelpers = require('handlebars-helpers');

handlebarsHelpers.math({
    exphbs: exphbs
});


//Static
app.use(express.static(path.join(__dirname, 'public')));

//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpersPath: __dirname + '/views/helpers/'
}));
app.set('view engine', '.hbs');

//Routes
var routes = require('./routes');

//Home
app.get('/', routes.home);

//Single Movie
app.get('/movie_single/:episode_number?', routes.movie_single);

// NotFound
app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);