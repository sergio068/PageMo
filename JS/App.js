const express = require('express');

require('./Reading');

const app = express();

//routes

app.use( require('./Config/google.routes'));

module.exports = app;