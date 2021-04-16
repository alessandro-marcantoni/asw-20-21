const express = require('express');
const app = express();

app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = mongoose.Schema({
    name: String,
    surname: String,
    age: Number
})

const User = mongoose.model('User', userSchema, 'users')

// Add user
app.post('/users', (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, doc) => {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    })
})

// Get all
app.get('/users', (req, res) => {
    User.find({}, (err, docs) => {
        if (err) {
            res.send(err);
        }
        res.json(docs);
    })
})

// Get one
app.get('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, docs) => {
        if (err) {
            res.send(err);
        }
        res.json(docs);
    })
})

// Update
app.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, doc) => {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    })
})

// Delete
app.delete('/users/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err) {
            res.send(err);
        }
        res.json(doc);
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})