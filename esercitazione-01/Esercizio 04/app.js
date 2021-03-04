const express = require('express');
const data = require('./colors.json');

const app = express();

// Setting local variables
app.locals.email = 'alessandr.marcanton2@studio.unibo.it';
app.locals.title = 'My website';

// Handling responses to GET requests on root path
app.get('/', (req, res) => {
    res.send('Hello world!')
});

// Handling responses with JSON objects to GET requests on "/colors" path
app.get('/colors', (req, res) => {
    //res.header('Content-Type', 'application/json');
    //res.send(JSON.stringify(data));

    res.json(data);
});

// Handling file responses
app.get('/contacts', (req, res) => {
    res.sendFile(__dirname + '/public/contacts-no-css.html');
});

// Use of parameters in URL path
app.get('/say-hello/:name', (req, res) => {
    res.send("Hello " + req.params.name);
});

// Use of PUG templates with parameters
app.get('/template-hello/:name', (req, res) => {
    res.render('hello', {name: req.params.name, title: app.locals.title, email: app.locals.email});
});

app.get('/count/:number', (req, res) => {
    let numbers = [];
    for (let i=0; i <= req.params.number; i++) {
        numbers.push(i);
    }
    res.render('visualize_numbers', {numbers: numbers});
});

// Allows to set a directory for static content
app.use(express.static('public'));

// Handling error 404
app.use((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page not found');
});

// Sets the view engine PUG
app.set('view engine', 'pug');

// Starting the server on port 3000
app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
})