const express = require('express');
const app = express();
const lesson1controller = require('./controllers/lesson1');

app.get('/', lesson1controller.helloRoute);
app.get('/world', lesson1controller.worldRoute);

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port ' + (process.env.port || 3000));