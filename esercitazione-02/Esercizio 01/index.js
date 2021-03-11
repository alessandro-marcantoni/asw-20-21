const express = require('express');
const app = express();
app.use(express.json());
const routes = require('./src/routes/movies-routes');

// Routes exposes a function that takes express app as argument.
routes(app);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
