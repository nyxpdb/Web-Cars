const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Carros',
      version: '1.0.0',
      description: 'Uma API para gerenciar carros',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/carRoutes.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
