const mongoose = require('mongoose');
const movieModel = require('../models/movies-model')(mongoose);

exports.list_movies = (req, res) => {
    movieModel.find({}, (err, doc) => {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    })
}

exports.get_movie_by_id = (req, res) => {
    movieModel.findById(req.params.id, (err, doc) => {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    })
}

exports.add_movie = (req, res) => {
    const newMovie = new movieModel(req.body);
    newMovie.save((err, doc) => {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    })
}

exports.update_movie = (req, res) => {
    movieModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, doc) => {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    })
}

exports.delete_movie = (req, res) => {
    movieModel.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    })
}

exports.movies_with_query = (res, req) => {
    movieModel.find()
        .where('actors').equals(req.query.actor)
        .where('year').gte(req.query.fromyear)
        .where('year').lte(req.query.toyear)
        .exec((err, doc) => {
            if (err) {
                res.send(err);
            }
            res.json(doc);
        })
}