const path = require('path');

const express = require('express');

const PORT = 3000;
const app = express();

app.listen(PORT);

// register view engine
app.set('view engine', 'ejs');

// setup middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

console.log('App is listening...');

// router

// 404 route