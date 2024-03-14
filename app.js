var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const deleteBarang = require('./routes/deleteBarang');
const editBarang = require('./routes/editBarang');
const getBarang = require('./routes/getBarang');
const tambahBarang = require('./routes/tambahBarang');
const Transaksi = require('./routes/Transaksi');



var app = express();


// view engine setup

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/delete', deleteBarang);
app.use('/edit', editBarang);
app.use('/get', getBarang);
app.use('/tambah', tambahBarang);
app.use('/transaksi', Transaksi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.message });
});

const  PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
