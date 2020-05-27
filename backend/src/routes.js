const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfilerController = require('./controllers/ProfilerController');
const SessionController = require('./controllers/SessionController');

const {celebrate,Segments,Joi} = require('celebrate');

const routes = express.Router();

routes.get('/ongs',OngController.index);

routes.post('/ongs',celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp:Joi.number().required().min(10),
        city:Joi.string().required(),
        uf:Joi.string().required().length(2)

    })
}),OngController.create);

routes.post('/session',SessionController.create);
routes.get('/profile',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization:Joi.string().required()
    }).unknown()
}),ProfilerController.index);

routes.post('/incidents',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization:Joi.string().required(),
    }).unknown(), 

    [Segments.BODY]:Joi.object().keys({
        title:Joi.string().required(),
        description:Joi.string().required(),
        value:Joi.number().required(),

    }),
}),IncidentController.create);

routes.get('/incidents',celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page:Joi.number()
    })
}),IncidentController.index);

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id:Joi.number().required(),
    })
}),IncidentController.delete);
module.exports = routes; 