const express = require('express');
const app = express();
const path = require('path');

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Isme andar pura path aayega
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    res.render("index");
});

app.get('/profile/:username', function (req, res) {
    res.send(`Welcome, ${req.params.username}`);
});

app.get('/profile/:username/:age', function (req, res) {
    res.send(`Welcome, ${req.params.username} your age is ${req.params.age}`);
});

app.listen(3000, function () {
    console.log("It's Running");
});

