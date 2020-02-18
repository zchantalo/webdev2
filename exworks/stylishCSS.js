var express = require('express');
var path    = require('path');
var stylus  = require('stylus');

var app = express();
var pathSite = process.argv[3];

app.use(require('stylus').middleware(pathSite||path.join(__dirname, 'public')));
app.use(express.static(pathSite||path.join(__dirname, 'public')));

app.listen(process.argv[2]);