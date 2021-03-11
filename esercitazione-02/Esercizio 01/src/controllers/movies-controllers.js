/**
 * Definition of the callbacks for the routes.
 */

const movies = require('./movies.json');

getRoot = (req, res) => {
    res.send('Hello World con get');
}

postRoot = (req, res) => {
    res.send('Hello World con post');
}

listMovies = (req, res) => {
    res.json(movies);
}

readMovie = (req, res) => {
    const index = movies.findIndex(m => m.id == req.params.id);
    if (index > -1) {
        res.json(movies[index]);
    } else {
        res.status(404).json({description: "Movie not found"});
    }
}

writeMovie = (req, res) => {
    const movie = req.body;
    const size = movies.length;
    movies.push(movie);
    if (movies.length > size) {
        res.status(200).json({description: "Movie added"});
    } else {
        res.status(500).json({description: "Movie could not be added"});
    }
}

changeMovie = (req, res) => {
    const index = movies.findIndex(m => m.id == req.params.id);
    if (index > -1) {
        movies.splice(index, 1, req.body);
        res.status(200).json({description: "Movie updated"});
    } else {
        res.status(404).json({description: "Movie not found"});
    }
}

deleteMovie = (req, res) => {
    const index = movies.findIndex(m => m.id == req.params.id);
    if (index > -1) {
        movies.splice(index, 1);
        res.status(200).json({description: "Movie removed"});
    } else {
        res.status(404).json({description: "Movie not found"});
    }
}

module.exports = {
    getRoot,
    postRoot,
    listMovies,
    readMovie,
    writeMovie,
    changeMovie,
    deleteMovie
}