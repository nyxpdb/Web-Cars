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
        url: 'https://web-cars-7wxh.onrender.com/',
      },
    ],
  },
  apis: ['./routes/carRoutes.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
