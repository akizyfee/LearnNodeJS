const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const resError = require('./service/resError');
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

dotenv.config({path: './config.env'});
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(() => {
  console.log('連線資料庫成功');
})

const postRouter = require('./routes/posts');
const userRouter = require('./routes/users');
const uploadRouter = require('./routes/upload');

const app = express();
app.use(cors({
  allowedHeaders:
  'Content-Type,Authorization,Content-Length,X-Requested-With',
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/upload', uploadRouter);
app.use('/api-doc',swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(function (err, req, res, next) {
  // dev
  err.statusCode = err.statusCode || 500;
  if (process.env.NODE_ENV === 'dev') {
    return resError.resErrorDev(err, res);
  }
  // production
  if (err.name === 'ValidationError') {
    err.message = '資料欄位未填寫正確，請重新輸入！';
    err.isOperational = true;
    return resError.resErrorProd(err, res);
  }
  resError.resErrorProd(err, res);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('未捕捉到的 rejection：', promise, '原因：', reason);

});

process.on('uncaughtException', err => {
	console.error('Uncaughted Exception！')
	console.error(err);
	process.exit(1);
});

module.exports = app;
