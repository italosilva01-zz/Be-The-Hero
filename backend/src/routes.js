const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfilerController = require('./controllers/ProfilerController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

routes.post('/session',SessionController.create);
routes.get('/profile',ProfilerController.index);

routes.post('/incidents',IncidentController.create);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);
module.exports = routes; 