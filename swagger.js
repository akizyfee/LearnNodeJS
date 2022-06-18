const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Meta API',
        descripttion: '生成的範例文件'
    },
    host: 'localhost:3000',
    schemas: ['http', 'https'],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'authorization',
            description: '需要加一上 JSON Web Token',
        },
    },
};

const outputFile = './swagger-output.json';
const endpointFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointFiles, doc);