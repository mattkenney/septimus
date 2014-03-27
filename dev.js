#!/usr/bin/env nodejs

var express = require('express')
,   httpProxy = require('http-proxy')
,   proxy = httpProxy.createProxyServer({})
;

function apiProxy()
{
    return function(req, res, next)
    {
        if (req.url.match(new RegExp('^\/hackathon\/')))
        {
            proxy.web(req, res, { target: 'http://www3.septa.org' });
        }
        else
        {
            next();
        }
    }
}

express()
    .use(apiProxy())
    .use(express.static('src'))
    .listen(3000)
    ;

console.log('Listening on port 3000');
