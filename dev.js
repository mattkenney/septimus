#!/usr/bin/env nodejs

var express = require('express');

express()
    .use(express.static('src'))
    .listen(3000)
    ;

console.log('Listening on port 3000');
