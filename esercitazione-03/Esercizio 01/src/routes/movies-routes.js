module.exports = app => {
    const controllers = require('../controllers/movies-controllers');

    app.route('/movies')
        .get(controllers.list_movies)
        .post(controllers.add_movie)

    app.route('/movies/:id')
        .get(controllers.get_movie_by_id)
        .put(controllers.update_movie)
        .delete(controllers.delete_movie)

    app.route('/querydb')
        .get(controllers.movies_with_query)
}