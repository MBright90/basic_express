const path = require('path');

const express = require('express');
const homeRoutes = require('./routes/homeRoutes');

const PORT = 3000;
const app = express();

app.listen(PORT);

// register view engine
app.set('view engine', 'ejs');

// setup middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// router
app.use(homeRoutes);

// 404 route
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});