/**
 * Definition of the routes for the express server.
 */

module.exports = app => {
    const movieControllers = require('../controllers/movies-controllers');

    // Creates a route (/) and sets a GET and a POST callback
    // The callbacks are stored in the controller.
    app.route('/')
        .get(movieControllers.getRoot)
        .post(movieControllers.postRoot)

    app.route('/movies')
        .get(movieControllers.listMovies)
        .post(movieControllers.writeMovie)

    app.route('/movies/:id')
        .get(movieControllers.readMovie)
        .put(movieControllers.changeMovie)
        .delete(movieControllers.deleteMovie)

}