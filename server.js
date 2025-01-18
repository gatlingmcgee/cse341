const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(port, () => {console.log(`Web Server is listening at port ${port}`)});
    }
});



/*app.listen(process.env.port || 3000);
console.log('Web Server is listening at port ' + (process.env.port || 3000));*/