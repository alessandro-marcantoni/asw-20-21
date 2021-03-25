const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const routes = require('./src/routes/movies-routes');

routes(app);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});