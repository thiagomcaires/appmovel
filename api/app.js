'use strict';

const express = require('express');
const app = express();
const libs = require('./libs');
const routes = require('./routes');

for (let lib in libs) {
  app.use(libs[lib]);
}

const api = express();
for (let route in routes) {
  api.use(`/${route}`, routes[route]);
}

app.use('/api/v1', api);

module.exports = app;
