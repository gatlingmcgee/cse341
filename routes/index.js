const routes = require('express').Router();
const lesson1controller = require('../controllers/index');

routes.use('/', require('./swagger'));

//routes.get('/', lesson1controller.helloRoute);
routes.get('/', (req, res) => { 
    //#swagger.tags=['Whats up people!']
    res.send('Whats up people!');
});

routes.use('/users', require('./users'));

//routes.get('/world', lesson1controller.worldRoute);
//routes.get('/peace', lesson1controller.peaceRoute);

module.exports = routes;