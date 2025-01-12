const routes = require('express').Router();
const lesson1controller = require('../controllers/lesson1');

routes.get('/', lesson1controller.helloRoute);
routes.get('/world', lesson1controller.worldRoute);
routes.get('/peace', lesson1controller.peaceRoute);

module.exports = routes;