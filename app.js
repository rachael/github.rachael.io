var express = require('express');
var app = module.exports = express();

require('rachael-io-common/common')(app);

var routes = require('./routes/index');
app.use('/', routes);

require('rachael-io-common/error-handler')(app);
