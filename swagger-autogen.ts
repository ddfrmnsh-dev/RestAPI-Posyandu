const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['./src/routes/*.ts'];

const config = {
    info: {
        title: 'Blog API Documentation',
        description: '',
    },
    tags: [
        {
        "name": "Petugas",
        "description": ""
        },
        {
        "name": "Imunisasi",
        "description": ""
        } 
    ],
    host: 'localhost:3000/api',
    schemes: ['http', 'https'],
};

swaggerAutogen(outputFile, endpointsFiles, config);