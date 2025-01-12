const express = require('express');
const app = express();

app.use('/', require('./routes'));

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port ' + (process.env.port || 3000));