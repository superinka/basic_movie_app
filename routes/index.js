var movieJSON = require('../movies.json');

//Home
exports.home = function(req, res) {

    var movies = movieJSON.movies;
    res.render('home', {
        title: "Star Wars Movies",
        movies: movies,
        helpers: {
            inc: function(value) { return parseInt(value) + 1; }
        }
    });
};

exports.movie_single = function(req, res) {
    var episode_number = req.params.episode_number;
    var movies = movieJSON.movies;



    if (episode_number >= 1 && episode_number <= 6) {
        var movie = movies[episode_number - 1];
        var title = movie.title;
        var main_characters = movie.main_characters;

        res.render('movie_single', {
            title: title,
            episode_number: episode_number,
            movies: movies,
            movie: movie,
            main_characters: main_characters,
            helpers: {
                inc: function(value) { return parseInt(value) + 1; }
            }
        });
    } else {
        res.render('notfound', {
            title: "This is not the page you are looking for",
            movies: movies,
            helpers: {
                inc: function(value) { return parseInt(value) + 1; }
            }
        });
    }

};

exports.notFound = function(req, res) {
    res.send("This is not the page you are looking for");
};