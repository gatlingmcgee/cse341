const routes = require('express').Router();
const lesson1controller = require('../controllers/index');

routes.get('/', lesson1controller.helloRoute);

routes.use('/users', require('./users'));

routes.get('/world', lesson1controller.worldRoute);
routes.get('/peace', lesson1controller.peaceRoute);

module.exports = routes;