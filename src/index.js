const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('dev'));

// Template engine
app.engine('handlebars', hbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'resources', 'views', 'partials'), // Đường dẫn đến partials
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

console.log("Views Path:", path.join(__dirname, 'resources', 'views'));
console.log("Partials Path:", path.join(__dirname, 'resources', 'views', 'partials'));

app.get('/', (req, res) => {
    res.render('home');
});

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>');
// });

// app.get('/about', (req, res) => {
//     res.send('<pre>This is About page</pre>');
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});