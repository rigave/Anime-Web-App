const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const methodOverride = require('method-override');

const animeRoutes = require('./routes/anime')

const app = express();
const port = 3000;

app.engine('ejs', ejsMate);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', animeRoutes)

app.all('*', (req, res, next) => {
    next(new ExpressError('Page not found!', 404))
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if(!err.message) err.message = "Something went wrong!";
    res.status(statusCode).render('error', { err });
});

app.listen(port, () => {
    console.log(`Listening On port ${port}`);
});