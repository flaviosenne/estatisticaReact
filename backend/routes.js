const { Router } = require('express');

const routes = Router();

const UserController = require('./controllers/UserController')
const DescriptiveController = require('./controllers/DescriptiveController')
// User
routes.post('/user', UserController.create);
routes.get('/user', UserController.read); 
routes.get('/user/:id', UserController.getOne); 
routes.put('/user/', UserController.update); 
routes.delete('/user/', UserController.delete); 

// Descritiva
routes.post('/descriptive', DescriptiveController.create);
routes.get('/descriptive', DescriptiveController.read);
routes.get('/descriptive/:id', DescriptiveController.getOne);
routes.put('/descriptive', DescriptiveController.update);
routes.delete('/descriptive', DescriptiveController.delete);

module.exports = routes;