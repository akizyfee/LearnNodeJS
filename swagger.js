const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Meta API',
        descripttion: '生成的範例文件'
    },
    host: 'https://learnnodejs.onrender.com',
    schemes: ['https', 'http'],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'authorization',
            description: '需要加一上 JSON Web Token，註冊和登入得到的 Token 輸入進來的時候前面要加 Bearer 和一個空白再複製得到的 Token 哦!',
        },
    },
};

const outputFile = './swagger-output.json';
const endpointFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointFiles, doc);